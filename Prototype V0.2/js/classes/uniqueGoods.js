class uniqueGoods extends tradeGoods {
    constructor(name, value, sprite, religion, deity) {
        super(name, value, sprite);
        this.religiousInfluence = religion;
        this.deityInfluence = deity;
    }
}