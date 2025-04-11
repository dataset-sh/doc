---
slug: mnist
sidebar_position: 5
title: "Example: Packaging, Sharing and Loading MNIST Dataset"
---

# Creating MNIST Dataset

## Existing Data Format

Assuming you have the following folder `./mnist-dataset-folder` that looks like this:

```text
$ ls ./mnist-dataset-folder
0.png        24.png       4.png        55.png       70.png       86.png
1.png        25.png       40.png       56.png       71.png       87.png
10.png       26.png       41.png       57.png       72.png       88.png
11.png       27.png       42.png       58.png       73.png       89.png
12.png       28.png       43.png       59.png       74.png       9.png
13.png       29.png       44.png       6.png        75.png       90.png
14.png       3.png        45.png       60.png       76.png       91.png
15.png       30.png       46.png       61.png       77.png       92.png
16.png       31.png       47.png       62.png       78.png       93.png
17.png       32.png       48.png       63.png       79.png       94.png
18.png       33.png       49.png       64.png       8.png        95.png
19.png       34.png       5.png        65.png       80.png       96.png
2.png        35.png       50.png       66.png       81.png       97.png
20.png       36.png       51.png       67.png       82.png       98.png
21.png       37.png       52.png       68.png       83.png       99.png
22.png       38.png       53.png       69.png       84.png       labels.json
23.png       39.png       54.png       7.png        85.png
```

#### Content of labels.json

```shell
$ cat labels.json
[{"label": "5", "file_index": "0"}, {"label": "0", "file_index": "1"}, ...]
```

For example, given the following entry:

```json
{
  "label": "5",
  "file_index": "0"
}
```

This item means that the content of image `0.png` is a handwritten digit **5**.

## Create Dataset File

```python
# First we define the data format
import json

import dataset_sh
from pydantic import BaseModel


class ImageAndLabel(BaseModel):
    file: str
    label: int


# Read existing data
with open('./mnist-dataset-folder/labels.json') as f:
    label_data = json.load(f)

with dataset_sh.create('./mnist-subset.dataset') as writer:
    data_items = []
    for row in label_data:
        image_idx = row['file_index']
        label = row['label']
        fn = f"{image_idx}.png"
        data_items.append(ImageAndLabel(file=fn, label=label))
        with open(f'./mnist-dataset-folder/{image_idx}.png', 'rb') as f:
            writer.add_binary_file(fn, f.read())
    writer.add_collection('label_data', data_items, ImageAndLabel)

dataset_sh.import_file('mnist-subset', './mnist-subset.dataset')
```

## Share the Dataset

You can share the file `mnist-subset.dataset` directly, or you can share this file through `dataset.sh` app server.

#### Start the server

```shell
flask --app dataset_sh.app.main run --port 8989
```

Now open this page: [http://localhost:8989/dataset/main/mnist-subset](http://localhost:8989/dataset/main/mnist-subset)

And it should look like this:
![App server screenshot: mnist page](/screenshots/app-server-mnist-home.png)

# Loading MNIST Dataset

As you can see in the above screenshot, `dataset.sh` will automatically generate  
how to download this dataset and how to load it is automatically generated
by `dataset.sh`.

If you want to share this dataset with other people, make sure bind your server to a host that can be access by other
people. (for example, you can use 0.0.0.0 or your IP)

#### Start the server with host=0.0.0.0

```shell
flask --app dataset_sh.app.main run --port 8989 --host 0.0.0.0
```

Now when you are visiting the URL (change this to your own external
IP) [http://192.168.1.159:8989/dataset/main/mnist-subset](http://192.168.1.159:8989/dataset/main/mnist-subset)

Then the generated code will become

```python
import dataset_sh
dataset_sh.import_url("main/mnist-subset", "http://192.168.1.159:8989/api/dataset/main/mnist-subset/file")
```

And other people who can access the host can use the exact code to download the file and then use the provided code to
load the content of it.

```python
import dataset_sh
with dataset_sh.read('main/mnist-subset') as reader:
    print(reader.collections())
    for item in reader.coll('label_data', model=ImageAndLabel):
        print(item)
        break
```




