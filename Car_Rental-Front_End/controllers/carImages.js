function carImageUrl(image) {
    if (!image) return '';
    if (image.startsWith('assets/images/car_bg_home/')) {
        return 'assets/images/car_bg_home/' + encodeURIComponent(image.slice('assets/images/car_bg_home/'.length));
    }
    return baseURLCarControle + 'uploads/' + encodeURIComponent(image);
}
