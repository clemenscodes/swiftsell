# Replace ORG_ID, PUBLIC_KEY and PRIVATE_KEY with your Atlas variables
variable "mongodb_atlas_org_id" {
  type = string
}

variable "mongodb_atlas_api_pub_key" {
  type = string
}

variable "mongodb_atlas_api_pri_key" {
  type = string
}

# Replace USERNAME And PASSWORD with what you want for your database user
# https://docs.atlas.mongodb.com/tutorial/create-mongodb-user-for-cluster/
variable "mongodb_atlas_database_user_password" {
  type = string
}

variable "mongodb_atlas_database_username" {
  type = string
}

# Replace IP_ADDRESS with the IP Address from where your application will connect
# https://docs.atlas.mongodb.com/security/add-ip-address-to-list/
variable "mongodb_atlas_accesslistip" {
  type = string
}
