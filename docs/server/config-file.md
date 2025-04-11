# Server Configuration

`dataset.sh` server have the following config

To create a new config file at current location, use command:

## Config Script

```shell
#  Create an empty config file
dataset-sh-server config init 

#  set password for user, and generate a new...
dataset-sh-server config set-password [USERNAME]

#  set server hostname
dataset-sh-server config set-hostname [HOSTNAME]

#  set server hostname
dataset-sh-server config read-access [public|private]

#  set server hostname
dataset-sh-server config upload [disable|enable]

```

## Config File Content

```json
{
  "require_auth": false,
  "allow_upload": false,
  "hostname": "http://127.0.0.1:5000",
  "users": [],
  "secret": "secure-hash:e.g. secrets.token_hex(32)",
  "data_folder": "/Users/your-username/dataset_sh/storage",
  "uploader_folder": "/Users/your-username/dataset_sh/uploader",
  "article_folder": "/Users/your-username/dataset_sh/posts"
}
```

* `require_auth: bool = False`: if this field is set to `true`, the server will be readable to authenticated user only.
* `allow_upload: bool = False`: if this field is set to `true`, the server accept upload, otherwise it can only be
  managed using command line locally.
* `hostname: str = 'http://127.0.0.1:5000'`: hostname to be used when generating dataset download instruction.
* `users: List[RepoServerUserProfile]`: list of user and their credentials (salted and hashed). You should manage this
  field with our cli `dataset-sh-server-cli set-password.`
* **SENSITIVE, KEPT SECRET** `secret: str`: server secret used to sign JWT, this field should be **KEPT SECRET**, so no
  one can forge a JWT on your server.
  Changing this value will invalidate all existing user session (i.e. they will need to sign in again).
* `data_folder: str = os.path.expanduser('~/dataset_sh/storage')`: where dataset files are stored in host system.
* `uploader_folder: str = os.path.expanduser('~/dataset_sh/uploader')`: staging area used by uploader614748.
* `article_folder: str = os.path.expanduser('~/dataset_sh/posts')`: where dataset documentations are stored in host
  system.
