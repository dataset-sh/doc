# Creating dataset.sh file reader library for other languages

## Understand dataset.sh file internal

`dataset.sh`'s data modeling approach is very similar to MongoDB's data model.

A dataset file in `dataset.sh` contains one or more collections. Each collection can be identified by a **collection
name**, and contains a list of **json objects** of the same schema.

A dataset file can also carry a list of binary files which do not belong to any collections.

The following tree structure provides a visual illustration of the structure of our data model.

```
dataset file:
    - collections:
        collection_1:
            - item 1
            - item 2
            ...
        collection_2:
            - item 1
            - item 2
            ...
    - binary files:
        - file 1
        - file 2
        ...
```

## Open a dataset.sh file

```text
- meta.json
- collection
    - <collection_name>
```

## Reading dataset.sh file Metadata

## Reading dataset.sh collection

