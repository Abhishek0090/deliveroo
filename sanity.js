import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

const client  = sanityClient({
    projectId : "w88dyw2k",
    dataset: 'production',
    useCdn: true,
    apiVersion: "2023-02-07"
})