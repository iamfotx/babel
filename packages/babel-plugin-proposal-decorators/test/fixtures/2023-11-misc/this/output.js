var _initClass, _classDecs, _obj, _dec, _obj2, _dec2, _init_x, _init_extra_x, _obj3, _dec3, _dec4, _init_y, _init_extra_y;
_classDecs = [o1, o1.dec, void 0, dec, o2, o2.dec];
_obj = o2;
_dec = _obj.dec;
_obj2 = o3.o;
_dec2 = _obj2.dec;
_obj3 = o2;
_dec3 = _obj3.dec;
_dec4 = dec;
let _A;
class A {
  static {
    ({
      e: [_init_x, _init_extra_x, _init_y, _init_extra_y],
      c: [_A, _initClass]
    } = babelHelpers.applyDecs2311(this, [[[_obj, _dec, _obj2, _dec2], 16, "x"], [[_obj3, _dec3, void 0, _dec4], 16, "y"]], _classDecs, 1));
  }
  constructor() {
    _init_extra_y(this);
  }
  x = _init_x(this);
  y = (_init_extra_x(this), _init_y(this));
  static {
    _initClass();
  }
}
