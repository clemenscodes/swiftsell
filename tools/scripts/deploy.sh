#!/bin/sh

set -e

export TF_IN_AUTOMATION=true

PROJECT_ID="organization-378109"
PLAN="plan.tfplan"
PURPLE="\\033[0;35m"
SET="\\033[0m\\n"

deploy() {
    TF_DIR="tools/infra"
    PROJECT_MODULE="module.workload_identity_federation.google_project.default"
    TF="terraform -chdir=$TF_DIR"
    BACKEND="$TF_DIR/backend.tf"
    BACKEND_ARG="-backend-config=bucket=$PROJECT_ID-state"
    PLAN_ARG="-out=$PLAN"
    INPUT_ARG="-input=false"
    LOCK_ARG="-lock=false"
    LOCK_TIMEOUT_ARG="-lock-timeout=60s"
    APPROVE_ARG="-auto-approve"
    DEFAULT_PLAN="$PLAN_ARG $INPUT_ARG $LOCK_TIMEOUT_ARG $LOCK_ARG $VAR_ARG"
    APPLY_ARGS="$INPUT_ARG $APPROVE_ARG $LOCK_ARG $LOCK_TIMEOUT_ARG $PLAN"
    if grep -q "local" "$BACKEND"; then
        local_plan
    else
        remote_plan
    fi
    rm "$TF_DIR/$PLAN"
    display_wif_instructions
}

local_plan() {
    $TF init
    import_project
    default_plan
    sed -i 's/local/gcs/g' "$BACKEND"
    echo "Migrating state"
    echo "yes" | $TF init -migrate-state "$BACKEND_ARG"
}

remote_plan() {
    $TF init "$BACKEND_ARG"
    default_plan
}

default_plan() {
    TF_COMMAND="$TF plan $DEFAULT_PLAN"
    run_tf_command
    TF_COMMAND="$TF apply $APPLY_ARGS"
    run_tf_command
}

run_tf_command() {
    echo
    purple "$TF_COMMAND"
    echo
    eval "$TF_COMMAND"
}

import_project() {
    TF_COMMAND="$TF import $PROJECT_MODULE $PROJECT_ID"
    run_tf_command
}

purple() {
    printf "$PURPLE%s$SET" "$1"
}

display_wif_instructions() {
    SERVICE_ACCOUNT=$($TF output service_account_email | tr -d '"')
    PROVIDER=$($TF output provider | tr -d '"')
    echo "The following secrets need to be added to the repository, so that the workload identity federation works"
    echo "SERVICE_ACCOUNT:  $SERVICE_ACCOUNT"
    echo "WORKLOAD_IDENTITY_PROVIDER: $PROVIDER"
}

deploy
