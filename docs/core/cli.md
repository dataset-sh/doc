---
slug: cli
title: Command Line Usage 
sidebar_position: 2
---

## dataset.sh

## Project Management

### init project

### install project

### install a dataset to project

## Dataset Cache Management

`dataset.sh` cache all installed datasets at `~/dataset_sh/storage/` by default, you can manage the cache using the following commands.

```text title="dataset.sh"
Usage: dataset.sh [OPTIONS] COMMAND [ARGS]...

  Simple CLI tool with subcommands

Options:
  -b, --base PATH  location of base storage folder.
  --help           Show this message and exit.

Commands:
  import        import dataset from url or file
  inspect-file  parse dataset file and print out information
  list          list datasets
  print         print dataset information
  remove        remove managed dataset
```

## print

```text title="print"
Usage: dataset.sh print [OPTIONS] NAME {list-collections|readme|code|sample}

  print dataset information

Options:
  -c, --collection TEXT  which collection
  --help                 Show this message and exit.
```

## remove

```text title="remove"
Usage: dataset.sh remove [OPTIONS] NAME

  remove managed dataset

Options:
  -f, --force  Force remove dataset without confirmation.
  --help       Show this message and exit.
```

## list

```text title="list"
Usage: dataset.sh list [OPTIONS]

  list datasets

Options:
  -s, --store TEXT  select dataset store space to list.
  --help            Show this message and exit.
```

## inspect-file

```text title="inspect-file"
Usage: dataset.sh inspect-file [OPTIONS] FILEPATH {list-
                               collections|code|sample}

  parse dataset file and print out information

Options:
  -c, --collection TEXT  which collection.
  --help                 Show this message and exit.
```

## import

```text title="import"
Usage: dataset.sh import [OPTIONS] NAME

  import dataset from url or file

Options:
  -u, --url TEXT   url of the dataset file to import
  -f, --file PATH  local file path of the dataset file to import
  --help           Show this message and exit.
```


## edit

```text
Usage: dataset.sh edit [OPTIONS] NAME

  Edit readme of a dataset

Options:
  --help  Show this message and exit.
```
