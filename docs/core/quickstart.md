# Quickstart

## Download Datasets

## Read Dataset Content

```

```

## Dataset Creation

In order to create a new dataset file, you can use the `dataset_sh.create` api.

```python title="create a dataset file"
import dataset_sh
from pydantic import BaseModel


class MyDataItem(BaseModel):
    value: str


collection_data = [MyDataItem(value=f"{i}") for i in range(10)]

with dataset_sh.create('./my-dataset.dataset') as writer:
    writer.add_binary_file('some-binary-file.bin', b'some binary value')
    writer.add_collection('my-collection', collection_data, MyDataItem)
```

## Utils

You can use the following utils functions for your convenience.

### dump_collections

```python title="dump_collections"
from dataset_sh.utils.dump import dump_collections, dump_single_collection
from pydantic import BaseModel


class MyDataItem(BaseModel):
    value: str


class MyDataItemInt(BaseModel):
    value: int


coll = [MyDataItem(value=f"{i}") for i in range(10)]
int_coll = [MyDataItemInt(value=i) for i in range(10)]

# Dump multiple collections at once.
dump_collections('./my-dataset.dataset', {
    "c1": coll,
    "c2": int_coll,
})

# if you have only one collection, you can use this api.
dump_single_collection('./my-dataset-single-collection.dataset', "c1", coll)

```


