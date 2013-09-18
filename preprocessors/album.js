// Make the title of the page dynamic
context.page.title = context.resources.album.from.name + ' &ndash; ' + context.resources.album.name;

// Add a lg and small attribute to each photo
_.each(context.resources.photos.data, function(photo)
{
  photo.lg = (_.where(photo.images, { width: 720 })[0] || photo.images[0]).source;
  photo.md = (_.where(photo.images, { width: 320 })[0] || photo.images[0]).source;
});

// Add a new album_data hash
context.resources.album_data = {
  name: context.resources.album.name,
  author: context.resources.album.from.name,
  cover: context.resources.photos.data[0].lg
};
