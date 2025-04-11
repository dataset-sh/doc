---
slug: read-datasets-using-dataset-sh
sidebar_position: 4
title: Read Datasets
---

You can open a dataset by

* file path: `dataset_sh.read_file`
* name: `dataset_sh.read` (if it is managed by dataset.sh app locally)

## Import a dataset

You can import dataset from a file path or an URL.

### import dataset from a file

```python 
import dataset_sh
dataset_sh.import_file("dataset-name", '/file-path/to/dataset')
```

### import dataset from URL

```python 
import dataset_sh
dataset_sh.import_url("dataset-name", 'https://url/to/dataset')
```

## Read Datasets

### Read a managed dataset

```python 
import dataset_sh

with dataset_sh.read('name') as reader:
    
    # listing binary files.
    print(reader.binary_files())
    
    # read a binary file by name. 
    reader.binary_file('bin-file-name')

    # listing collections.
    print(reader.collections())
    
    # Iterate collection items as JSON objects
    for item in reader.collection('coll-name'):
        print(item)
        
   # Iterate collection items as JSON objects
    for item in reader.collection('coll-name'):
        print(item)
```

### Read a standalone dataset from file

```python 
import dataset_sh

with dataset_sh.read_file('./my-dataset.dataset') as reader:
    pass

```

## Dataset Schema

You can reconstruct

### Read a managed dataset

```python 
import dataset_sh

with dataset_sh.read_file('./my-dataset.dataset') as reader:
    print(reader.collection('my-collection').code_usage())
```

