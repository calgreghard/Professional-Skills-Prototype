class dictionary {
    constructor(key, value) {
            this.key = [];
        for (var i = 0; i < key.length; i++) {
            this.key.push(key[i]);
        }
        if (value === undefined)
            this.value = [];
        else {
            this.value = [];

            for (var i = 0; i < value.length; i++) {
                this.value.push(value[i]);
            }
        }
    }

    add(key, value) {
        this.key.push(key);
        this.value.push(value);
    }

    addValue(keyNum, value) {
        this.value.push(value);
    }
}