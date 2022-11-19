const AdsModel = [
    {
        alt : "image 1",
        img_url :  "https://res.cloudinary.com/practicaldev/image/fetch/s--2IL9iU-o--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://dev-to-uploads.s3.amazonaws.com/i/utush8tcae5kstn7vs1z.png",
        link : "http://google.com"
    },
    {
        alt : "image 2",
        img_url :  "data:image/png;base64,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",
        link : "http://google.com"
    },
    {
        alt : "image 3",
        img_url :  "https://assets.digitalocean.com/articles/67426/form_with_all_input.png",
        link : "http://google.com"
    },
]

export default AdsModel;

