export const getPostBySlugQuery = `*[_type == "Post" && slug.current == $slug][0]{
        _id,
        postType,
        title,
        body,
        publicationDate,
        slug,
        images[]{
          asset->{url}
        }
      }`;
