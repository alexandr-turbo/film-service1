(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["film"],{"0083":function(e,t,i){"use strict";var r=i("23f5"),n=i.n(r);n.a},"0614":function(e,t,i){},"23f5":function(e,t,i){},"3f32":function(e,t,i){},4344:function(e,t,i){"use strict";i.r(t);var r=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"film"},[e.currentfilm&&e.cast&&e.trailers?i("div",[i("div",{staticClass:"film__poster-container"},[e.currentfilm.backdrop_path?i("img",{staticClass:"film__poster",attrs:{src:e.globalImgAddress+"1280"+e.currentfilm.backdrop_path}}):e._e()]),i("div",{staticClass:"container"},[e.genres&&e.genres.length?i("div",[e._v(e._s(e._f("localize")("film-genres"))+": "+e._s(e.genres))]):e._e(),e.currentfilm.overview?i("div",[i("div",[e._v(e._s(e._f("localize")("film-summary")))]),i("div",[e._v(e._s(e.currentfilm.overview))])]):e._e(),e.cast.length?i("div",[i("SlickTemplate",{attrs:{cast:e.cast}})],1):e._e(),e.trailers.length?i("div",[i("FilmTrailersSlickTemplate",{attrs:{trailers:e.trailers}})],1):e._e(),e.reviews&&e.reviews.length?i("div",{staticClass:"film__title"},[e._v(" "+e._s(e._f("localize")("film-reviews"))+" ")]):e._e(),e._l(e.reviews,(function(e,t){return i("div",{key:e.id},[i("FilmReviewTemplate",{attrs:{review:e,index:t}})],1)}))],2)]):e._e()])},n=[],a=(i("99af"),i("a15b"),i("d81d"),i("b0c0"),i("d3b7"),i("3ca3"),i("ddb0"),i("96cf"),i("bc3a")),s=i.n(a),c=i("e193"),l=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("div",{staticClass:"film-trailers-slick-template__title"},[e._v(e._s(e._f("localize")("film-trailers-slick-template-trailers")))]),i("slick",{ref:"slick",staticClass:"slick",attrs:{options:e.slickOptions_trailers}},e._l(e.trailers,(function(e){return i("div",{key:e.id},[i("FilmTrailerCoverTemplate",{attrs:{item:e}})],1)})),0)],1)},o=[],u=i("7ecd"),f=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("div",{staticClass:"film-trailer-cover-template__trailer-container"},[i("div",{staticClass:"film-trailer-cover-template__trailer"},[i("iframe",{attrs:{width:"100%",src:"https://www.youtube.com/embed/"+e.item.key}}),i("div",{staticClass:"film-trailer-cover-template__trailer-title"},[e._v(e._s(e.item.name))])])])])},m=[],v={props:["item"]},h=v,d=(i("a9fc"),i("2877")),p=Object(d["a"])(h,f,m,!1,null,"c33e4380",null),g=p.exports,_={data:function(){return{slickOptions_trailers:{slidesToShow:3,infinite:!0,draggable:!1,lazyLoad:"ondemand",responsive:[{breakpoint:1280,settings:{slidesToShow:2}},{breakpoint:880,settings:{slidesToShow:1}}]}}},components:{Slick:u["a"],FilmTrailerCoverTemplate:g},props:["trailers"]},w=_,b=(i("8d63"),Object(d["a"])(w,l,o,!1,null,"5e957ce0",null)),k=b.exports,y=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{class:e.index%2===0?"film-review-template__right-border":"film-review-template__left-border"},[i("div",{staticClass:"film-review-template__bio"},[i("div",[e._v(e._s(e.review.author))]),i("div",[e._v(e._s(e.splittedReviewContent))]),i("a",{staticClass:"film-review-template__full-review",attrs:{href:"//www.themoviedb.org/review/"+e.review.id}},[e._v(e._s(e._f("localize")("film-review-template-see-full-review"))+" >>")])])])},x=[],T={props:["review","index"],computed:{splittedReviewContent:function(){return this.review.content.substring(0,255)+"..."}}},C=T,R=(i("0083"),Object(d["a"])(C,y,x,!1,null,null,null)),A=R.exports,I={data:function(){return{key:"f943d3d10cc39fd734122d69efabbacb",genres:"",currentfilm:{},cast:[],trailers:[],reviews:[],isvisible:!0,loc:""}},components:{SlickTemplate:c["a"],FilmTrailersSlickTemplate:k,FilmReviewTemplate:A},props:["filmID","filmType"],methods:{changeLocale:function(){var e,t,i,r;return regeneratorRuntime.async((function(n){while(1)switch(n.prev=n.next){case 0:return this.$root.loading=!0,this.loc=this.$store.state.locale.locale,this.currentfilm={},n.next=5,regeneratorRuntime.awrap(this.getCurrentFilm());case 5:e=n.sent,this.genres="",this.getGenres(),this.cast=[],t=this.getCast(),this.trailers=[],i=this.getTrailers(),this.reviews=[],r=this.getReviews(),Promise.all([e,t,i,r]).then(this.$root.loading=!1);case 15:case"end":return n.stop()}}),null,this)},getCurrentFilm:function(){var e=this;return regeneratorRuntime.async((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,regeneratorRuntime.awrap(s.a.get("".concat(this.globalAPIMovieDBAddress,"/3/").concat(this.filmType,"/").concat(this.filmID,"?api_key=").concat(this.key,"&language=").concat(this.loc)).then((function(t){e.currentfilm=t.data})));case 2:case"end":return t.stop()}}),null,this)},getGenres:function(){this.genres=this.currentfilm.genres.map((function(e){return e.name})).join("/")},getCast:function(){var e=this;return regeneratorRuntime.async((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,regeneratorRuntime.awrap(s.a.get("".concat(this.globalAPIMovieDBAddress,"/3/").concat(this.filmType,"/").concat(this.filmID,"/credits?api_key=").concat(this.key,"&language=").concat(this.loc)).then((function(t){e.cast=t.data.cast;for(var i=function(t){s.a.get("".concat(e.globalAPIMovieDBAddress,"/3/person/").concat(e.cast[t].id,"?api_key=").concat(e.key,"&language=").concat(e.loc)).then((function(i){e.$set(e.cast[t],"bio",i.data.biography)}))},r=0;r<e.cast.length;r++)i(r)})));case 2:case"end":return t.stop()}}),null,this)},getTrailers:function(){var e=this;return regeneratorRuntime.async((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,regeneratorRuntime.awrap(s.a.get("".concat(this.globalAPIMovieDBAddress,"/3/").concat(this.filmType,"/").concat(this.filmID,"/videos?api_key=").concat(this.key,"&language=").concat(this.loc)).then((function(t){e.trailers=t.data.results})));case 2:case"end":return t.stop()}}),null,this)},getReviews:function(){var e=this;return regeneratorRuntime.async((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,regeneratorRuntime.awrap(s.a.get("".concat(this.globalAPIMovieDBAddress,"/3/").concat(this.filmType,"/").concat(this.filmID,"/reviews?api_key=").concat(this.key,"&language=").concat(this.loc)).then((function(t){e.reviews=t.data.results})));case 2:case"end":return t.stop()}}),null,this)}},watch:{"$store.state.locale.locale":function(){this.changeLocale()}},created:function(){var e,t,i,r;return regeneratorRuntime.async((function(n){while(1)switch(n.prev=n.next){case 0:return this.loc=this.$store.state.locale.locale,n.next=3,regeneratorRuntime.awrap(this.getCurrentFilm());case 3:return e=n.sent,this.getGenres(),n.next=7,regeneratorRuntime.awrap(this.getCast());case 7:return t=n.sent,n.next=10,regeneratorRuntime.awrap(this.getTrailers());case 10:return i=n.sent,n.next=13,regeneratorRuntime.awrap(this.getReviews());case 13:r=n.sent,Promise.all([e,t,i,r]).then(this.$root.loading=!1);case 15:case"end":return n.stop()}}),null,this)}},$=I,D=(i("937a"),Object(d["a"])($,r,n,!1,null,"2af0fbf7",null));t["default"]=D.exports},"8d63":function(e,t,i){"use strict";var r=i("0614"),n=i.n(r);n.a},"937a":function(e,t,i){"use strict";var r=i("3f32"),n=i.n(r);n.a},a15b:function(e,t,i){"use strict";var r=i("23e7"),n=i("44ad"),a=i("fc6a"),s=i("b301"),c=[].join,l=n!=Object,o=s("join",",");r({target:"Array",proto:!0,forced:l||o},{join:function(e){return c.call(a(this),void 0===e?",":e)}})},a9fc:function(e,t,i){"use strict";var r=i("e673"),n=i.n(r);n.a},b301:function(e,t,i){"use strict";var r=i("d039");e.exports=function(e,t){var i=[][e];return!i||!r((function(){i.call(null,t||function(){throw 1},1)}))}},d81d:function(e,t,i){"use strict";var r=i("23e7"),n=i("b727").map,a=i("1dde");r({target:"Array",proto:!0,forced:!a("map")},{map:function(e){return n(this,e,arguments.length>1?arguments[1]:void 0)}})},e673:function(e,t,i){}}]);
//# sourceMappingURL=film.e740ba3d.js.map