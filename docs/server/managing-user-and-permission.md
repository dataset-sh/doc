# Managing User and Permission

For downloading and viewing dataset and documentations, `dataset.sh` server can be
config as:

* publicly readable
* only readable for authorized user.

For uploading dataset, `dataset.sh` server can be config as:

* allow dataset upload for authorized user.
* upload only via command line on host.

The default configuration will make the server publicly readable, and does not allow remote upload.

## Managing Read Permission

The field `require_auth` in your config file control the read permission of your server:

* `require_auth=true` will disable public read, user need to sign in to see the content of your server.
* `require_auth=false` will allow public read.

```json
{
  "require_auth": true
}
```

## Managing Upload Permission

The field `allow_upload` in your config file control the permission for uploading datasets to your server:

* `allow_upload=true`: authenticated user will be able to upload dataset to your server remotely via a http api.
* `allow_upload=false`: no one can upload dataset remotely via server api. You have to manually upload via command line.

```json
{
  "allow_upload": true
}
```

## Managing User

User information are stored in the config file, in order to create a new user, you can use the command line app:

```shell
dataset-sh-server-cli set-password <username>
```

To specify a config file:

```shell
dataset-sh-server-cli -c /path/to/config/file set-password <username>
# /path/to/config/file default is ./dataset-sh-server-config.json
```

And following instruction, this command will salt and hash your password and stored it in the config file.