// v-img="'url'" load background image
export default {
    install: function (Vue, options) {
        Vue.directive('img', function (value) {
            if (!value) {
                return;
            }
            var _this = this;
            var image = new Image();
            _this.el.style.opacity = 0;
            image.onload = function () {
                _this.el.style.backgroundImage = `url("${value}")`;
                _this.el.style.opacity = 1;
            }
            image.onerror = function () {
                _this.el.style.backgroundColor = '#ccc';
                _this.el.style.opacity = 1;
            }
            image.src = value;
        });
    }
}
