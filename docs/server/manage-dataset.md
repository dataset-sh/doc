# Manage dataset on server

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