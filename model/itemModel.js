export default class itemModel {

    constructor(iid, iname, iprice, iqty) {
        this._iid = iid;
        this._iname = iname;
        this._iprice = iprice;
        this._iqty = iqty;
    }

        get iid() {
        return this._iid;
    }

    set iid(value) {
        this._iid = value;
    }

    get iname() {
        return this._iname;
    }

    set iname(value) {
        this._iname = value;
    }

    get iprice() {
        return this._iprice;
    }

    set iprice(value) {
        this._iprice = value;
    }

    get iqty() {
        return this._iqty;
    }

    set iqty(value) {
        this._iqty = value;
    }
}