---
title: Type Annotation
---

Type annotation is optional but highly recommended in dataset.sh

As a dataset publisher, this small inconvinence can benefit your future users by:

* making it easier for others to understand and work with your dataset.
* enabel us to genreate code in multiple languages, which enhances the developer experience significantly.

We create `easytype` to help dataset creators provide type annotations of their datasets.

## `easytype` Tutorial

### Basic Example

```python
from easytype import TypeBuilder

TranslationPair = TypeBuilder.create(
    'TranslationPair',
    orginal= str,
    translated=str,
)

```

#### Primitive types

`easytype` supports the following primitive types:
* int
* float
* str
* bool
* list
* dict
* any: via `typing.Any`



```python title="all supported primitive types"
from easytype import TypeBuilder
from typing import Any

AllPrimitiveTypes = TypeBuilder.create(
    'AllPrimitiveTypes',
    int_value=int,
    float_value=float,
    str_value=str,
    bool_value=bool,
    list_value=list
    dict_value=dict
    any_value=Any # you can escape using Any type
)

```
#### Paramertized types
`easytype` supports the following primitive types:
* list (python 3.9+) or typing.List
* dict (python 3.9+) or typing.Dict
* tuple (python 3.9+) or typing.Tuple
* Optional (typing.Optional)
* Union (typing.Union)


```python title="supported paramertized types"
from easytype import TypeBuilder
import typing


ParamertizedTypeExample = TypeBuilder.create(
    'ParamertizedTypeExample',
    list_of_int_values=list[int],
    optional_int_value=typing.Optional[int],
    union_type=typing.Union[str, int],
    dict_str_to_int_value=dict[str, int],
    tuple_example=tuple[str, int],
)

# You may have to use typing.List, typing.Dict or typing.Tuple before python 3.9
```

### Referencing other types

#### Self Reference (recursive)

```python title="Self Reference"
from easytype import TypeBuilder

TreeNode = TypeBuilder.create(
    'TreeNode',
    name= str,
    children=list['TreeNode'],
)


```

#### Using other types

##### Reference
```
from easytype import TypeBuilder, TypeReference

WikidataEntity = TypeBuilder.create(
    'WikidataEntity',
    id=str,
    label=str
)

WrittenWork = TypeBuilder.create(
    'WrittenWork',
    name=str,
    authors=list[WikidataEntity],
    country_of_origin=WikidataEntity,
    entity_id=str,
).reference(WikidataEntity) # You need to reference keyword if used this way.


```

##### Inline Types
You can also create type inline.

```
from easytype import TypeBuilder, TypeReference

WrittenWork = TypeBuilder.create(
    'WrittenWork',
    name=str,
    country_of_origin=dict(
        id=str,
        label=str
    ),
    entity_id=str,
).reference(WikidataEntity) # You need to reference keyword if used this way.


```

##### Use TypeReference With `reference` function

```python title="export typing with reference to other types"
from easytype import TypeBuilder, TypeReference

WikidataEntity = TypeBuilder.create(
    'WikidataEntity',
    id=str,
    label=str
)

WrittenWork = TypeBuilder.create(
    'WrittenWork',
    name=str,


    # create a type reference with TypeReference function.
    country_of_origin=TypeReference('WikidataEntity'),

    # use as a parameter
    authors=list['WikidataEntity'],  

    entity_id=str,
).reference(WikidataEntity) # You need to reference keyword if used this way.

```
## Provide type annotation with `dataset.sh` API

###

```python

```

## Provide type annotation with `datafact`

You can provide type annotation by editing `type.py` in your `datafact` project, for detailed instruction, please read `datafact`'s documentation.

Link: [datafact documentation](/docs/create-dataset/datafact/templates/hello-world)