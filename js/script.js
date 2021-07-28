const root = new Vue({
    el: "#root",
    data: {
        currentIndex: 0,
        images: [
            "images/image1.jpg",
            "images/image2.jpg",
            "images/image3.jpg",
            "images/image4.jpg",
        ],
    },
    methods: {
        isActive(index) {
            return this.currentIndex === index ? "active" : "";
        },
        increaseIndex() {
            const lastIndex = this.images.length - 1;
            if (this.currentIndex === lastIndex) {
                this.currentIndex = 0;
            } else {
                this.currentIndex++;
            }
        },
        decreaseIndex() {
            const lastIndex = this.images.length - 1;
            if (this.currentIndex === 0) {
                this.currentIndex = lastIndex;
            } else {
                this.currentIndex--;
            }
        },
        setCurrentIndex(newIndex) {
            this.currentIndex = newIndex;
        },   
    },
});