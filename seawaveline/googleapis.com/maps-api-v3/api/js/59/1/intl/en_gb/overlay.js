google.maps.__gjsload__('overlay', function(_) {
    var Ywa = function() {},
        AB = function(a) {
            a.LA = a.LA || new Ywa;
            return a.LA
        },
        Zwa = function(a) {
            this.Eg = new _.Nm(() => {
                const b = a.LA;
                if (a.getPanes()) {
                    if (a.getProjection()) {
                        if (!b.Hg && a.onAdd) a.onAdd();
                        b.Hg = !0;
                        a.draw()
                    }
                } else {
                    if (b.Hg)
                        if (a.onRemove) a.onRemove();
                        else a.remove();
                    b.Hg = !1
                }
            }, 0)
        },
        axa = function(a, b) {
            const c = AB(a);
            let d = c.Fg;
            d || (d = c.Fg = new Zwa(a));
            _.Kb(c.Eg || [], _.uk);
            var e = c.Ig = c.Ig || new _.Xpa;
            const f = b.__gm;
            e.bindTo("zoom", f);
            e.bindTo("offset", f);
            e.bindTo("center", f, "projectionCenterQ");
            e.bindTo("projection",
                b);
            e.bindTo("projectionTopLeft", f);
            e = c.Kg = c.Kg || new $wa(e);
            e.bindTo("zoom", f);
            e.bindTo("offset", f);
            e.bindTo("projection", b);
            e.bindTo("projectionTopLeft", f);
            a.bindTo("projection", e, "outProjection");
            a.bindTo("panes", f);
            e = () => _.Om(d.Eg);
            c.Eg = [_.sk(a, "panes_changed", e), _.sk(f, "zoom_changed", e), _.sk(f, "offset_changed", e), _.sk(b, "projection_changed", e), _.sk(f, "projectioncenterq_changed", e)];
            _.Om(d.Eg);
            b instanceof _.Wk ? (_.pl(b, "Ox"), _.M(b, 148440)) : b instanceof _.Gl && (_.pl(b, "Oxs"), _.M(b, 181451))
        },
        bxa = function(a) {
            const b =
                AB(a);
            var c = b.Ig;
            c && c.unbindAll();
            (c = b.Kg) && c.unbindAll();
            a.unbindAll();
            a.set("panes", null);
            a.set("projection", null);
            b.Eg && b.Eg.forEach(d => {
                _.uk(d)
            });
            b.Eg = null;
            b.Fg && (_.Pm(b.Fg.Eg), b.Fg = null)
        },
        gxa = function(a) {
            if (a) {
                var b = a.getMap();
                if (cxa(a) !== b && b && b instanceof _.Wk) {
                    const c = b.__gm;
                    c.overlayLayer ? a.__gmop = new dxa(b, a, c.overlayLayer) : c.Fg.then(({
                        ah: d
                    }) => {
                        const e = new exa(b, d);
                        d.Ii(e);
                        c.overlayLayer = e;
                        fxa(a);
                        gxa(a)
                    })
                }
            }
        },
        fxa = function(a) {
            if (a) {
                var b = a.__gmop;
                b && (a.__gmop = null, b.Eg.unbindAll(), b.Eg.set("panes",
                    null), b.Eg.set("projection", null), b.Hg.Ql(b), b.Fg && (b.Fg = !1, b.Eg.onRemove ? b.Eg.onRemove() : b.Eg.remove()))
            }
        },
        cxa = function(a) {
            return (a = a.__gmop) ? a.map : null
        },
        hxa = function(a, b) {
            a.Eg.get("projection") != b && (a.Eg.bindTo("panes", a.map.__gm), a.Eg.set("projection", b))
        },
        $wa = class extends _.Hk {
            constructor(a) {
                super();
                this.projection = a
            }
            changed(a) {
                a !== "outProjection" && (a = !!(this.get("offset") && this.get("projectionTopLeft") && this.get("projection") && _.xj(this.get("zoom"))), a === !this.get("outProjection") && this.set("outProjection",
                    a ? this.projection : null))
            }
        };
    var BB = {};
    _.Ia(Zwa, _.Hk);
    BB.Vl = function(a) {
        if (a) {
            var b = a.getMap();
            (AB(a).Jg || null) !== b && (b && axa(a, b), AB(a).Jg = b)
        }
    };
    BB.Ql = function(a) {
        bxa(a);
        delete AB(a).Jg
    };
    BB.aN = Ywa;
    var CB = {},
        dxa = class {
            constructor(a, b, c) {
                this.map = a;
                this.Eg = b;
                this.Hg = c;
                this.Fg = !1;
                _.pl(this.map, "Ox");
                _.M(this.map, 148440);
                c.Vl(this)
            }
            draw() {
                this.Fg || (this.Fg = !0, this.Eg.onAdd && this.Eg.onAdd());
                this.Eg.draw && this.Eg.draw()
            }
        },
        exa = class {
            constructor(a, b) {
                this.Ig = a;
                this.Hg = b;
                this.Eg = null;
                this.Fg = []
            }
            dispose() {}
            Xh(a, b, c, d, e, f, g, h) {
                const k = this.Eg = this.Eg || new _.gy(this.Ig, this.Hg, () => {});
                k.Xh(a, b, c, d, e, f, g, h);
                for (const m of this.Fg) hxa(m, k), m.draw()
            }
            Vl(a) {
                this.Fg.push(a);
                this.Eg && hxa(a, this.Eg);
                this.Hg.refresh()
            }
            Ql(a) {
                _.Tb(this.Fg,
                    a)
            }
        };
    CB.Vl = gxa;
    CB.Ql = fxa;
    _.kj("overlay", {
        tC: function(a) {
            if (a) {
                (0, BB.Ql)(a);
                (0, CB.Ql)(a);
                var b = a.getMap();
                b && (b instanceof _.Wk ? (0, CB.Vl)(a) : (0, BB.Vl)(a))
            }
        },
        preventMapHitsFrom: a => {
            _.du(a, {
                Ll: ({
                    event: b
                }) => {
                    _.fs(b.Eg)
                },
                kk: b => _.Pt(b),
                Gq: b => _.Qt(b),
                ml: b => _.Qt(b),
                Ek: b => _.Rt(b)
            }).ss(!0)
        },
        preventMapHitsAndGesturesFrom: a => {
            a.addEventListener("click", _.qk);
            a.addEventListener("contextmenu", _.qk);
            a.addEventListener("dblclick", _.qk);
            a.addEventListener("mousedown", _.qk);
            a.addEventListener("mousemove", _.qk);
            a.addEventListener("MSPointerDown",
                _.qk);
            a.addEventListener("pointerdown", _.qk);
            a.addEventListener("touchstart", _.qk);
            a.addEventListener("wheel", _.qk)
        }
    });
});