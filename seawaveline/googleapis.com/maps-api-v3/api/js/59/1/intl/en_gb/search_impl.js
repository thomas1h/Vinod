google.maps.__gjsload__('search_impl', function(_) {
    var Fyb = function(a, b) {
            _.Xg(a.Gg, 1, b)
        },
        Gyb = function(a, b) {
            _.Xg(a.Gg, 3, b)
        },
        Iyb = function(a) {
            if (_.an[15]) {
                var b = a.Kl;
                const c = a.Kl = a.getMap();
                b && a.Eg && (a.Hg ? (b = b.__gm.gk, b.set(b.get().Un(a.Eg))) : a.Eg && _.pZa(a.Eg, b) && ((a.Fg || []).forEach(_.uk), a.Fg = null));
                if (c) {
                    b = new _.Nw;
                    const d = a.get("layerId").split("|");
                    b.layerId = d[0];
                    for (let e = 1; e < d.length; ++e) {
                        const [f, ...g] = d[e].split(":");
                        b.parameters[f] = g.join(":")
                    }
                    a.get("spotlightDescription") && (b.spotlightDescription = new _.Sv(a.get("spotlightDescription")));
                    a.get("paintExperimentIds") &&
                        (b.paintExperimentIds = a.get("paintExperimentIds").slice(0));
                    a.get("styler") && (b.styler = new _.Ov(a.get("styler")));
                    a.get("roadmapStyler") && (b.roadmapStyler = new _.Ov(a.get("roadmapStyler")));
                    a.get("travelMapRequest") && (b.travelMapRequest = new _.tpa(a.get("travelMapRequest")));
                    a.get("mapsApiLayer") && (b.mapsApiLayer = new _.Tv(a.get("mapsApiLayer")));
                    a.get("mapFeatures") && (b.mapFeatures = a.get("mapFeatures"));
                    a.get("clickableCities") && (b.clickableCities = a.get("clickableCities"));
                    a.get("searchPipeMetadata") &&
                        (b.searchPipeMetadata = new _.Hx(a.get("searchPipeMetadata")));
                    a.get("gmmContextPipeMetadata") && (b.gmmContextPipeMetadata = new _.ona(a.get("gmmContextPipeMetadata")));
                    a.get("overlayLayer") && (b.overlayLayer = new _.Uv(a.get("overlayLayer")));
                    a.get("caseExperimentIds") && (b.caseExperimentIds = a.get("caseExperimentIds").slice(0));
                    a.get("boostMapExperimentIds") && (b.boostMapExperimentIds = a.get("boostMapExperimentIds").slice(0));
                    a.get("airQualityPipeMetadata") && (b.airQualityPipeMetadata = new _.apa(a.get("airQualityPipeMetadata")));
                    a.get("directionsPipeParameters") && (b.directionsPipeParameters = new _.Zoa(a.get("directionsPipeParameters")));
                    a.get("clientSignalPipeMetadata") && (b.clientSignalPipeMetadata = new _.Wma(a.get("clientSignalPipeMetadata")));
                    b.darkLaunch = !!a.get("darkLaunch");
                    a.Eg = b;
                    a.Hg = a.get("renderOnBaseMap");
                    a.Hg ? (a = c.__gm.gk, a.set(_.fr(a.get(), b))) : Hyb(a, c, b);
                    _.pl(c, "Lg");
                    _.M(c, 148282)
                }
            }
        },
        Hyb = function(a, b, c) {
            var d = new Jyb;
            d = _.IG(d);
            c.Er = d.load.bind(d);
            c.clickable = a.get("clickable") !== !1;
            _.OYa(c, _.lQ(b));
            b = [];
            b.push(_.sk(c,
                "click", Kyb.bind(null, a)));
            for (const e of ["mouseover", "mouseout", "mousemove"]) b.push(_.sk(c, e, Lyb.bind(null, a, e)));
            b.push(_.sk(a, "clickable_changed", () => {
                a.Eg.clickable = a.get("clickable") !== !1
            }));
            a.Fg = b
        },
        Kyb = function(a, b, c, d, e) {
            let f = null;
            if (e && (f = {
                    status: e.getStatus()
                }, e.getStatus() === 0)) {
                f.location = _.Y(e.Gg, 2) ? new _.ek(_.Ps(_.J(e.Gg, 2, _.Us).Gg, 1), _.Ps(_.J(e.Gg, 2, _.Us).Gg, 2)) : null;
                const g = {};
                f.fields = g;
                const h = _.ui(e.Gg, 3);
                for (let k = 0; k < h; ++k) {
                    const m = _.Qq(e.Gg, 3, _.vQ, k);
                    g[m.getKey()] = m.getValue()
                }
            }
            _.Ek(a,
                "click", b, c, d, f)
        },
        Lyb = function(a, b, c, d, e, f, g) {
            let h = null;
            f && (h = {
                title: f[1].title,
                snippet: f[1].snippet
            });
            _.Ek(a, b, c, d, e, h, g)
        },
        Myb = class {},
        Nyb = class extends _.W {
            constructor() {
                super()
            }
            gj() {
                return _.L(this.Gg, 2)
            }
        },
        Oyb = [_.N, , , _.No, _.e_a];
    var Pyb = class extends _.W {
        constructor(a) {
            super(a)
        }
        getStatus() {
            return _.H(this.Gg, 1, -1)
        }
        getLocation() {
            return _.Gi(this.Gg, 2, _.Us)
        }
    };
    var Jyb = class {
        constructor() {
            var a = _.go,
                b = _.fo;
            this.Eg = _.Mi;
            this.fetch = _.fx.bind(Myb, a, _.by + "/maps/api/js/LayersService.GetFeature", b)
        }
        load(a, b) {
            function c(e) {
                b(new Pyb(e))
            }
            const d = new Nyb;
            Fyb(d, a.layerId.split("|")[0]);
            _.Xg(d.Gg, 2, a.featureId);
            Gyb(d, this.Eg.Eg().Eg());
            for (const e in a.parameters) {
                const f = _.Ji(d.Gg, 4, _.vQ);
                _.Xg(f.Gg, 1, e);
                _.Xg(f.Gg, 2, a.parameters[e])
            }
            a = _.zi(d, Oyb, 1);
            this.fetch(a, c, c);
            return a
        }
        cancel() {
            throw Error("Not implemented");
        }
    };
    var Qyb = class {
        constructor() {
            this.IG = Iyb
        }
    };
    _.kj("search_impl", new Qyb);
});