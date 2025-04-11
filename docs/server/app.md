---
slug: app
title: dataset.sh Server
---

You can run a `dataset.sh` server if you:

1. Want to manage datasets within your organization.
2. Want to utilize the web UI to manage your locally managed datasets.

## Start the server

```shell title="deploy with flask dev server"
python -m dataset_sh.server.app 
```

```shell title="deploy using gunicorn"
gunicorn -b 0.0.0.0:8989 "dataset_sh.server.app:create_app()" 
```

## Server configuration

`dataset.sh` server use json config file like this:

```json
{
  "require_auth": false,
  "allow_upload": false,
  "hostname": "",
  "users": [],
  "secret": "----some---random---secret---",
  "data_folder": "/Users/_____/dataset_sh/storage",
  "uploader_folder": "/Users/_____/dataset_sh/uploader",
  "article_folder": "/Users/_____/dataset_sh/posts",
  "max_chunk_count": 500,
  "minimal_chunk_size": 1048576
}
```

By default, the app will use config file at `'./dataset-sh-server-config.json'`, you can change its location by

1. `--config`, e.g. `python -m dataset_sh.server.app --config /path/to/config.json`
2. set environment variable: `DATASET_SH_SERVER_CONFIG_FILE`

### Managing User and Permissions

`dataset.sh` use the following two config value to control

```json title="everyone can view and download, but no one is allowed to upload via remote api"
{
  "require_auth": false,
  "allow_upload": false
}
```

```json title="only authorized users can view, download, and upload via remote api"
{
  "require_auth": true,
  "allow_upload": true
}
```

```json title="only authorized users can view and download, but no one is allowed to upload via remote api"
{
  "require_auth": true,
  "allow_upload": false
}
```

```json title="everyone can view, download and upload"
{
  "require_auth": false,
  "allow_upload": true
}
```

#### Add a user

```shell
python -m dataset_sh.server.app_cli config set-password YOUR_USERNAME
```

### Managing Datasets
To manage datasets on a `dataset.sh` server, you can use the standard `dataset.sh local` command line interface.

Assuming the value of `data_folder` in your server config is `/path/to/data_folder`, you can use the `-f/--folder` flag
when using the `dataset.sh local` command.

```shell

# See help message
dataset.sh local -f /path/to/data_folder --help

dataset.sh local -f /path/to/data_folder import-as-latest [NAME] [FILE] --tag [TAG] --help

#  import dataset from file and do not tag
dataset.sh local -f /path/to/data_folder import [NAME] [FILE] --tag [TAG] --help

#  print metadata of a dataset
dataset.sh local -f /path/to/data_folder meta [NAME] --version [VERSION] --tag [TAG] --help

#  list collections of a dataset
dataset.sh local -f /path/to/data_folder list-collections [NAME] --version [VERSION] --tag [TAG] --help

#  print data model code of a dataset collection
dataset.sh local -f /path/to/data_folder print-code [NAME] [COLLECTION_NAME] --version [VERSION] --tag [TAG] --help

#  print sample content of a dataset collection
dataset.sh local -f /path/to/data_folder print-sample [NAME] [COLLECTION_NAME] --version [VERSION] --tag [TAG] --help

#  remove all versions of a managed dataset
dataset.sh local -f /path/to/data_folder remove [NAME] --force [FORCE] --help

#  remove a version from a managed dataset
dataset.sh local -f /path/to/data_folder remove-version [NAME] --version [VERSION] --tag [TAG] --force [FORCE] --help

#  list datasets
dataset.sh local -f /path/to/data_folder list --namespace [NAMESPACE] --help

#  list dataset versions
dataset.sh local -f /path/to/data_folder list-version [NAME] --help

#  Tag dataset version
dataset.sh local -f /path/to/data_folder tag [NAME] [TAG] [VERSION] --help

#  Remove dataset version tag
dataset.sh local -f /path/to/data_folder untag [NAME] [TAG] --help

#  Print dataset version tag information
dataset.sh local -f /path/to/data_folder tag-info [NAME] [TAG] --help
```

### Documenting your datasets

Assume you have the following configuration

```json
{
  "article_folder": "/var/opt/dataset-sh/posts/"
}
```

For the rest of this tutorial, we will assume you have set `article_folder` to
`/var/opt/dataset-sh/posts`

#### Single Dataset Documentation

To create a Single Dataset Documentation, simply edit the following file:
`/var/opt/dataset-sh/posts/<username>/<dataset_name>.md`

The content of will show up on page `/dataset/<username>/<dataset_name>`.

#### Additional: Using Assets (image, video, audio and, etc.)

You can also include asset files in the following folder:

* `/var/opt/dataset-sh/posts/__assets__`

For example, assuming you have `__assets__/a/b.png`, which will have an url `/api/post-assets/a/b.png`

And then you can refer to it in your markdown file like this:

```markdown
![My Image](/api/post-assets/a/b.png)
```
