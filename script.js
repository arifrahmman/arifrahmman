new Vue({
    el: '#app',
    data: {
        title: 'Data Input',
        subtitle: 'Memasukkan data',
        inputText: '',
        dynamicText: 'Teks ini akan berubah.',
        isHighlighted: false,
        styleObject: {
            color: 'red',
            fontSize: '20px'
        }
    },
    methods: {
        updateText() {
            this.dynamicText = this.inputText;
        },
        toggleHighlight() {
            this.isHighlighted = !this.isHighlighted;
            if (this.isHighlighted) {
                this.styleObject.color = 'blue';
            } else {
                this.styleObject.color = 'red';
            }
        }
    }
});
