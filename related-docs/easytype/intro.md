---
title: "Quick Start"
slug: intro
sidebar_position: 1
---

# easytype: A Type Annotation Library for datasets

`easytype` is a python library for type annotation. If user want you to create a new type annotation using this library,
you should do the that by following this guide.

# Guide

## Install the library

```python
pip install easytype
```

## Import the library

```python
from easytype import TypeBuilder
```

## Creating a type annotation

```python
from easytype import TypeBuilder
NameOfYourType = TypeBuilder.create(
    'NameOfYourType',
    field_1=int,
    list_of_int_values=list[int],
)
```

`easytype` supports the following types:

* Primitive types: `int`, `float`, `str`, `bool`, `list`, `dict`, `any`
* Paramertized types: `list`, `dict`, `tuple`, `Optional`, `Union`

All those are python types, types such as `Optional`, `Union` are from python's `typing` library.
for python version before 3.9, user can use typing.List, typing.Dict, typing.Tuple instead of the lowercase ones.

`typing.NotRequired` should be cast to `Optional`

## Reference Other Types

```python
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

### Self Reference (recursive)

```
from easytype import TypeBuilder

TreeNode = TypeBuilder.create(
    'TreeNode',
    name= str,
    children=list['TreeNode'],
)
```

## More examples:

```python title="Example: hello world"
from easytype import TypeBuilder

HelloWorldTranslation = TypeBuilder.create(
    'HelloWorldTranslation',
    language=str,
    value=str
)
```

```python title="Example: enum types"
from easytype import TypeBuilder

SentenceWithSentiment = TypeBuilder.create(
    'SentenceWithSentiment',
    sentence=str,
    sentiment=['positive', 'negative']
)
```

```python title="Example: recursive types"
from easytype import TypeBuilder
from easytype.core import TypeReference

TreeNode = TypeBuilder.create(
    'TreeNode',
    name= str,
    children=list[TypeReference('TreeNode')],
)
```

```python title="Example: Kitchen Sink"
from easytype import TypeBuilder
import typing


KitchenSink = TypeBuilder.create(
    'KitchenSink',
    # 
    str_value = str,
    float_value = float,
    int_value = int,
    bool_value = bool,
    list_value = list,
    dict_value = dict,
    dict_value = dict,
    
    
    # you can use typing.Any as a wildcard.
    any_value = typing.Any,
    
    # enum value can be defined like this    
    sentiment=['positive', 'negative'],

    
    # parameterized types are supported. (union, list, dict, optional, tuple)
    list_of_int_values=list[int],
    optional_int_value=typing.Optional[int],
    union_type=typing.Union[str, int],
    dict_str_to_int_value=dict[str, int],
    tuple_example=dict[str, int],
    
    # you can create a nested type inline.
    inline_type={
        int_value=int,
        a_str_value=str,
    },
    
    # you can also reference previousely defined types.
    reference_to_other_type=SentenceWithSentiment,
    
)
```

## LLM Helper

You can use this [easytype helper chatgpt](https://chatgpt.com/g/g-67c0bdb7b8a481918e13fc6c81d59e18-easytype).
