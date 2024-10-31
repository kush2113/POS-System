export default class CustomerModel {

    constructor(cid, cname, caddress, cphone) {
        this._cid = cid;
        this._cname = cname;
        this._caddress = caddress;
        this._cphone = cphone;

    }


    get cid() {
        return this._cid;
    }

    set cid(value) {
        this._cid = value;
    }

    get cname() {
        return this._cname;
    }

    set cname(value) {
        this._cname = value;
    }

    get caddress() {
        return this._caddress;
    }

    set caddress(value) {
        this._caddress = value;
    }

    get cphone() {
        return this._cphone;
    }

    set cphone(value) {
        this._cphone = value;
    }
}