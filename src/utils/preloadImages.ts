const preloadImages = (srcArray: string[]) => {
    srcArray.forEach((src) => {
        const img = new Image();
        img.src = src;
    });
};

export default preloadImages;