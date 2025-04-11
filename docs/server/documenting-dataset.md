# Dataset Documentation

`dataset.sh` server has a built-in markdown based documentation system offer
two different styles of Dataset Documentation.

* Single Dataset Documentation
* Project Based Documentation

To use this feature, simply config the `article_folder` field in your server configuration.

```json
{
  "article_folder": "/var/opt/dataset-sh/posts/"
}
```

For the rest of this tutorial, we will assume you have set `article_folder` to
`/var/opt/dataset-sh/posts`

## Single Dataset Documentation

To create a Single Dataset Documentation, simply edit the following file:
`/var/opt/dataset-sh/posts/<username>/<dataset_name>.md`

The content of will show up on page `/dataset/<username>/<dataset_name>`.

## Project Based Documentation

To create a Single Dataset Documentation, simply edit the following file:
`/var/opt/dataset-sh/posts/<slug>.md`

The content of will show up on page `/post/<slug>`. For example: `http://YOUR-HOST/post/my-awesome-project`

### Additional: Using Assets (image, video, audio and, etc.)

You can also include asset files in the following folder:

* `/var/opt/dataset-sh/posts/__assets__`

For example, assuming you have `__assets__/a/b.png`, which will have an url `/api/post-assets/a/b.png`

And then you can refer to it in your markdown file like this:

```markdown
![My Image](/api/post-assets/a/b.png)
```