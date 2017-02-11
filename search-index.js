var searchIndex = {};
searchIndex["derive_more"] = {"doc":"# derive_more\nRust has lots of builtin traits that are implemented for its basic types, such as [`Add`],\n[`Not`] or [`From`].\nHowever, when wrapping these types inside your own structs or enums you lose the\nimplementations of these traits and are required to recreate them.\nThis is especially annoying when your own structures are very simple, such as when using the\ncommonly advised newtype pattern (e.g. `MyInt(i32)`).","items":[],"paths":[]};
searchIndex["quote"] = {"doc":"Quasi-quoting without a Syntex dependency, intended for use with [Macros\n1.1](https://github.com/rust-lang/rfcs/blob/master/text/1681-macros-1.1.md).","items":[[3,"Tokens","quote","Tokens produced by a `quote!(...)` invocation.",null,null],[3,"ByteStr","","Wrap a `&amp;str` so it interpolates as a byte-string: `b&quot;abc&quot;`.",null,null],[12,"0","","",0,null],[3,"Hex","","Wrap an integer so it interpolates as a hexadecimal.",null,null],[12,"0","","",1,null],[3,"Ident","","An identifier that should be interpolated without quotes.",null,null],[11,"fmt","","",2,null],[11,"clone","","",2,null],[11,"eq","","",2,null],[11,"ne","","",2,null],[11,"new","","Empty tokens.",2,{"inputs":[],"output":{"name":"self"}}],[11,"append","","For use by `ToTokens` implementations.",2,null],[11,"append_all","","For use by `ToTokens` implementations.",2,null],[11,"append_separated","","For use by `ToTokens` implementations.",2,null],[11,"append_terminated","","For use by `ToTokens` implementations.",2,null],[11,"as_str","","",2,null],[11,"parse","","",2,null],[11,"default","","",2,{"inputs":[],"output":{"name":"self"}}],[11,"fmt","","",2,null],[11,"fmt","","",0,null],[11,"to_tokens","","",0,null],[11,"to_tokens","","",2,null],[11,"fmt","","",1,null],[11,"to_tokens","","",1,null],[11,"to_tokens","","",1,null],[11,"to_tokens","","",1,null],[11,"to_tokens","","",1,null],[11,"to_tokens","","",1,null],[11,"to_tokens","","",1,null],[11,"to_tokens","","",1,null],[11,"to_tokens","","",1,null],[11,"to_tokens","","",1,null],[11,"to_tokens","","",1,null],[11,"fmt","","",3,null],[11,"clone","","",3,null],[11,"hash","","",3,null],[11,"new","","",3,{"inputs":[{"name":"t"}],"output":{"name":"self"}}],[11,"from","","",3,{"inputs":[{"name":"str"}],"output":{"name":"self"}}],[11,"from","","",3,{"inputs":[{"name":"cow"}],"output":{"name":"self"}}],[11,"from","","",3,{"inputs":[{"name":"string"}],"output":{"name":"self"}}],[11,"as_ref","","",3,null],[11,"fmt","","",3,null],[11,"eq","","",3,null],[11,"to_tokens","","",3,null],[8,"ToTokens","","Types that can be interpolated inside a `quote!(...)` invocation.",null,null],[10,"to_tokens","","Write `self` to the given `Tokens`.",4,null],[14,"quote","","The whole point.",null,null]],"paths":[[3,"ByteStr"],[3,"Hex"],[3,"Tokens"],[3,"Ident"],[8,"ToTokens"]]};
searchIndex["syn"] = {"doc":"","items":[[3,"Attribute","syn","Doc-comments are promoted to attributes that have `is_sugared_doc` = true",null,null],[12,"style","","",0,null],[12,"value","","",0,null],[12,"is_sugared_doc","","",0,null],[3,"Field","","",null,null],[12,"ident","","",1,null],[12,"vis","","",1,null],[12,"attrs","","",1,null],[12,"ty","","",1,null],[3,"Variant","","",null,null],[12,"ident","","",2,null],[12,"attrs","","",2,null],[12,"data","","",2,null],[12,"discriminant","","Explicit discriminant, e.g. `Foo = 1`",2,null],[3,"Generics","","Represents lifetimes and type parameters attached to a declaration\nof a function, enum, trait, etc.",null,null],[12,"lifetimes","","",3,null],[12,"ty_params","","",3,null],[12,"where_clause","","",3,null],[3,"Lifetime","","",null,null],[12,"ident","","",4,null],[3,"LifetimeDef","","A lifetime definition, e.g. `&#39;a: &#39;b+&#39;c+&#39;d`",null,null],[12,"attrs","","",5,null],[12,"lifetime","","",5,null],[12,"bounds","","",5,null],[3,"TyParam","","",null,null],[12,"attrs","","",6,null],[12,"ident","","",6,null],[12,"bounds","","",6,null],[12,"default","","",6,null],[3,"WhereBoundPredicate","","A type bound.",null,null],[12,"bound_lifetimes","","Any lifetimes from a `for` binding",7,null],[12,"bounded_ty","","The type being bounded",7,null],[12,"bounds","","Trait and lifetime bounds (`Clone+Send+&#39;static`)",7,null],[3,"WhereClause","","A `where` clause in a definition",null,null],[12,"predicates","","",8,null],[3,"WhereEqPredicate","","An equality predicate (unsupported).",null,null],[12,"lhs_ty","","",9,null],[12,"rhs_ty","","",9,null],[3,"WhereRegionPredicate","","A lifetime predicate.",null,null],[12,"lifetime","","",10,null],[12,"bounds","","",10,null],[3,"ImplGenerics","","Returned by `Generics::split_for_impl`.",null,null],[3,"Turbofish","","Returned by `TyGenerics::as_turbofish`.",null,null],[3,"TyGenerics","","Returned by `Generics::split_for_impl`.",null,null],[3,"Ident","","",null,null],[3,"Delimited","","",null,null],[12,"delim","","The type of delimiter",11,null],[12,"tts","","The delimited sequence of token trees",11,null],[3,"Mac","","Represents a macro invocation. The Path indicates which macro\nis being invoked, and the vector of token-trees contains the source\nof the macro invocation.",null,null],[12,"path","","",12,null],[12,"tts","","",12,null],[3,"DeriveInput","","",null,null],[12,"ident","","",13,null],[12,"vis","","",13,null],[12,"attrs","","",13,null],[12,"generics","","",13,null],[12,"body","","",13,null],[3,"AngleBracketedParameterData","","A path like `Foo&lt;&#39;a, T&gt;`",null,null],[12,"lifetimes","","The lifetime parameters for this path segment.",14,null],[12,"types","","The type parameters for this path segment, if present.",14,null],[12,"bindings","","Bindings (equality constraints) on associated types, if present.",14,null],[3,"BareFnArg","","An argument in a function type.",null,null],[12,"name","","",15,null],[12,"ty","","",15,null],[3,"BareFnTy","","",null,null],[12,"unsafety","","",16,null],[12,"abi","","",16,null],[12,"lifetimes","","",16,null],[12,"inputs","","",16,null],[12,"output","","",16,null],[12,"variadic","","",16,null],[3,"MutTy","","",null,null],[12,"ty","","",17,null],[12,"mutability","","",17,null],[3,"ParenthesizedParameterData","","A path like `Foo(A,B) -&gt; C`",null,null],[12,"inputs","","`(A, B)`",18,null],[12,"output","","`C`",18,null],[3,"Path","","A &quot;Path&quot; is essentially Rust&#39;s notion of a name.",null,null],[12,"global","","A `::foo` path, is relative to the crate root rather than current\nmodule (like paths in an import).",19,null],[12,"segments","","The segments in the path: the things separated by `::`.",19,null],[3,"PathSegment","","A segment of a path: an identifier, an optional lifetime, and a set of types.",null,null],[12,"ident","","The identifier portion of this path segment.",20,null],[12,"parameters","","Type/lifetime parameters attached to this path. They come in\ntwo flavors: `Path&lt;A,B,C&gt;` and `Path(A,B) -&gt; C`. Note that\nthis is more than just simple syntactic sugar; the use of\nparens affects the region binding rules, so we preserve the\ndistinction.",20,null],[3,"PolyTraitRef","","",null,null],[12,"bound_lifetimes","","The `&#39;a` in `&lt;&#39;a&gt; Foo&lt;&amp;&#39;a T&gt;`",21,null],[12,"trait_ref","","The `Foo&lt;&amp;&#39;a T&gt;` in `&lt;&#39;a&gt; Foo&lt;&amp;&#39;a T&gt;`",21,null],[3,"QSelf","","The explicit Self type in a &quot;qualified path&quot;. The actual\npath, including the trait and the associated item, is stored\nseparately. `position` represents the index of the associated\nitem qualified with this Self type.",null,null],[12,"ty","","",22,null],[12,"position","","",22,null],[3,"TypeBinding","","Bind a type to an associated type: `A=Foo`.",null,null],[12,"ident","","",23,null],[12,"ty","","",23,null],[4,"AttrStyle","","Distinguishes between Attributes that decorate items and Attributes that\nare contained as statements within items. These two cases need to be\ndistinguished for pretty-printing.",null,null],[13,"Outer","","",24,null],[13,"Inner","","",24,null],[4,"MetaItem","","A compile-time attribute item.",null,null],[13,"Word","","Word meta item.",25,null],[13,"List","","List meta item.",25,null],[13,"NameValue","","Name value meta item.",25,null],[4,"NestedMetaItem","","Possible values inside of compile-time attribute lists.",null,null],[13,"MetaItem","","A full MetaItem, for recursive meta items.",26,null],[13,"Literal","","A literal.",26,null],[4,"ConstExpr","","",null,null],[13,"Call","","A function call",27,null],[13,"Binary","","A binary operation (For example: `a + b`, `a * b`)",27,null],[13,"Unary","","A unary operation (For example: `!x`, `*x`)",27,null],[13,"Lit","","A literal (For example: `1`, `&quot;foo&quot;`)",27,null],[13,"Cast","","A cast (`foo as f64`)",27,null],[13,"Path","","Variable reference, possibly containing `::` and/or type\nparameters, e.g. foo::bar::&lt;baz&gt;.",27,null],[13,"Index","","An indexing operation (`foo[2]`)",27,null],[13,"Paren","","No-op: used solely so we can pretty-print faithfully",27,null],[13,"Other","","If compiling with full support for expression syntax, any expression is\nallowed",27,null],[4,"VariantData","","",null,null],[13,"Struct","","",28,null],[13,"Tuple","","",28,null],[13,"Unit","","",28,null],[4,"Visibility","","",null,null],[13,"Public","","",29,null],[13,"Crate","","",29,null],[13,"Restricted","","",29,null],[13,"Inherited","","",29,null],[4,"TraitBoundModifier","","A modifier on a bound, currently this is only used for `?Sized`, where the\nmodifier is `Maybe`. Negative bounds should also be handled here.",null,null],[13,"None","","",30,null],[13,"Maybe","","",30,null],[4,"TyParamBound","","The AST represents all type param bounds as types.\n`typeck::collect::compute_bounds` matches these against\nthe &quot;special&quot; built-in traits (see `middle::lang_items`) and\ndetects Copy, Send and Sync.",null,null],[13,"Trait","","",31,null],[13,"Region","","",31,null],[4,"WherePredicate","","A single predicate in a `where` clause",null,null],[13,"BoundPredicate","","A type binding, e.g. `for&lt;&#39;c&gt; Foo: Send+Clone+&#39;c`",32,null],[13,"RegionPredicate","","A lifetime predicate, e.g. `&#39;a: &#39;b+&#39;c`",32,null],[13,"EqPredicate","","An equality predicate (unsupported)",32,null],[4,"FloatTy","","",null,null],[13,"F32","","",33,null],[13,"F64","","",33,null],[13,"Unsuffixed","","",33,null],[4,"IntTy","","",null,null],[13,"Isize","","",34,null],[13,"I8","","",34,null],[13,"I16","","",34,null],[13,"I32","","",34,null],[13,"I64","","",34,null],[13,"Usize","","",34,null],[13,"U8","","",34,null],[13,"U16","","",34,null],[13,"U32","","",34,null],[13,"U64","","",34,null],[13,"Unsuffixed","","",34,null],[4,"Lit","","Literal kind.",null,null],[13,"Str","","A string literal (`&quot;foo&quot;`)",35,null],[13,"ByteStr","","A byte string (`b&quot;foo&quot;`)",35,null],[13,"Byte","","A byte char (`b&#39;f&#39;`)",35,null],[13,"Char","","A character literal (`&#39;a&#39;`)",35,null],[13,"Int","","An integer literal (`1`)",35,null],[13,"Float","","A float literal (`1f64` or `1E10f64` or `1.0E10`)",35,null],[13,"Bool","","A boolean literal",35,null],[4,"StrStyle","","",null,null],[13,"Cooked","","A regular string, like `&quot;foo&quot;`",36,null],[13,"Raw","","A raw string, like `r##&quot;foo&quot;##`",36,null],[4,"BinOpToken","","",null,null],[13,"Plus","","",37,null],[13,"Minus","","",37,null],[13,"Star","","",37,null],[13,"Slash","","",37,null],[13,"Percent","","",37,null],[13,"Caret","","",37,null],[13,"And","","",37,null],[13,"Or","","",37,null],[13,"Shl","","",37,null],[13,"Shr","","",37,null],[4,"DelimToken","","A delimiter token",null,null],[13,"Paren","","A round parenthesis: `(` or `)`",38,null],[13,"Bracket","","A square bracket: `[` or `]`",38,null],[13,"Brace","","A curly brace: `{` or `}`",38,null],[4,"Token","","",null,null],[13,"Eq","","",39,null],[13,"Lt","","",39,null],[13,"Le","","",39,null],[13,"EqEq","","",39,null],[13,"Ne","","",39,null],[13,"Ge","","",39,null],[13,"Gt","","",39,null],[13,"AndAnd","","",39,null],[13,"OrOr","","",39,null],[13,"Not","","",39,null],[13,"Tilde","","",39,null],[13,"BinOp","","",39,null],[13,"BinOpEq","","",39,null],[13,"At","","",39,null],[13,"Dot","","",39,null],[13,"DotDot","","",39,null],[13,"DotDotDot","","",39,null],[13,"Comma","","",39,null],[13,"Semi","","",39,null],[13,"Colon","","",39,null],[13,"ModSep","","",39,null],[13,"RArrow","","",39,null],[13,"LArrow","","",39,null],[13,"FatArrow","","",39,null],[13,"Pound","","",39,null],[13,"Dollar","","",39,null],[13,"Question","","",39,null],[13,"Literal","","",39,null],[13,"Ident","","",39,null],[13,"Underscore","","",39,null],[13,"Lifetime","","",39,null],[13,"DocComment","","",39,null],[4,"TokenTree","","When the main rust parser encounters a syntax-extension invocation, it\nparses the arguments to the invocation as a token-tree. This is a very\nloose structure, such that all sorts of different AST-fragments can\nbe passed to syntax extensions using a uniform type.",null,null],[13,"Token","","A single token",40,null],[13,"Delimited","","A delimited sequence of token trees",40,null],[4,"Body","","",null,null],[13,"Enum","","",41,null],[13,"Struct","","",41,null],[4,"BinOp","","",null,null],[13,"Add","","The `+` operator (addition)",42,null],[13,"Sub","","The `-` operator (subtraction)",42,null],[13,"Mul","","The `*` operator (multiplication)",42,null],[13,"Div","","The `/` operator (division)",42,null],[13,"Rem","","The `%` operator (modulus)",42,null],[13,"And","","The `&amp;&amp;` operator (logical and)",42,null],[13,"Or","","The `||` operator (logical or)",42,null],[13,"BitXor","","The `^` operator (bitwise xor)",42,null],[13,"BitAnd","","The `&amp;` operator (bitwise and)",42,null],[13,"BitOr","","The `|` operator (bitwise or)",42,null],[13,"Shl","","The `&lt;&lt;` operator (shift left)",42,null],[13,"Shr","","The `&gt;&gt;` operator (shift right)",42,null],[13,"Eq","","The `==` operator (equality)",42,null],[13,"Lt","","The `&lt;` operator (less than)",42,null],[13,"Le","","The `&lt;=` operator (less than or equal to)",42,null],[13,"Ne","","The `!=` operator (not equal to)",42,null],[13,"Ge","","The `&gt;=` operator (greater than or equal to)",42,null],[13,"Gt","","The `&gt;` operator (greater than)",42,null],[4,"UnOp","","",null,null],[13,"Deref","","The `*` operator for dereferencing",43,null],[13,"Not","","The `!` operator for logical inversion",43,null],[13,"Neg","","The `-` operator for negation",43,null],[4,"Abi","","",null,null],[13,"Named","","",44,null],[13,"Rust","","",44,null],[4,"FunctionRetTy","","",null,null],[13,"Default","","Return type is not specified.",45,null],[13,"Ty","","Everything else",45,null],[4,"Mutability","","",null,null],[13,"Mutable","","",46,null],[13,"Immutable","","",46,null],[4,"PathParameters","","Parameters of a path segment.",null,null],[13,"AngleBracketed","","The `&lt;&#39;a, A, B, C&gt;` in `foo::bar::baz::&lt;&#39;a, A, B, C&gt;`",47,null],[13,"Parenthesized","","The `(A, B)` and `C` in `Foo(A, B) -&gt; C`",47,null],[4,"Ty","","The different kinds of types recognized by the compiler",null,null],[13,"Slice","","A variable-length array (`[T]`)",48,null],[13,"Array","","A fixed length array (`[T; n]`)",48,null],[13,"Ptr","","A raw pointer (`*const T` or `*mut T`)",48,null],[13,"Rptr","","A reference (`&amp;&#39;a T` or `&amp;&#39;a mut T`)",48,null],[13,"BareFn","","A bare function (e.g. `fn(usize) -&gt; bool`)",48,null],[13,"Never","","The never type (`!`)",48,null],[13,"Tup","","A tuple (`(A, B, C, D, ...)`)",48,null],[13,"Path","","A path (`module::module::...::Type`), optionally\n&quot;qualified&quot;, e.g. `&lt;Vec&lt;T&gt; as SomeTrait&gt;::SomeType`.",48,null],[13,"TraitObject","","A trait object type `Bound1 + Bound2 + Bound3`\nwhere `Bound` is a trait or a lifetime.",48,null],[13,"ImplTrait","","An `impl Bound1 + Bound2 + Bound3` type\nwhere `Bound` is a trait or a lifetime.",48,null],[13,"Paren","","No-op; kept solely so that we can pretty-print faithfully",48,null],[13,"Infer","","TyKind::Infer means the type should be inferred instead of it having been\nspecified. This can appear anywhere in a type.",48,null],[13,"Mac","","A macro in the type position.",48,null],[4,"Unsafety","","",null,null],[13,"Unsafe","","",49,null],[13,"Normal","","",49,null],[5,"parse_derive_input","","",null,{"inputs":[{"name":"str"}],"output":{"name":"result"}}],[5,"parse_type","","",null,{"inputs":[{"name":"str"}],"output":{"name":"result"}}],[5,"parse_path","","",null,{"inputs":[{"name":"str"}],"output":{"name":"result"}}],[5,"parse_where_clause","","",null,{"inputs":[{"name":"str"}],"output":{"name":"result"}}],[5,"parse_token_trees","","",null,{"inputs":[{"name":"str"}],"output":{"name":"result"}}],[5,"parse_ident","","",null,{"inputs":[{"name":"str"}],"output":{"name":"result"}}],[5,"parse_ty_param_bound","","",null,{"inputs":[{"name":"str"}],"output":{"name":"result"}}],[11,"to_tokens","","",0,null],[11,"to_tokens","","",25,null],[11,"to_tokens","","",26,null],[11,"fmt","","",0,null],[11,"clone","","",0,null],[11,"eq","","",0,null],[11,"ne","","",0,null],[11,"hash","","",0,null],[11,"name","","",0,null],[11,"fmt","","",24,null],[11,"clone","","",24,null],[11,"eq","","",24,null],[11,"hash","","",24,null],[11,"fmt","","",25,null],[11,"clone","","",25,null],[11,"eq","","",25,null],[11,"ne","","",25,null],[11,"hash","","",25,null],[11,"name","","",25,null],[11,"fmt","","",26,null],[11,"clone","","",26,null],[11,"eq","","",26,null],[11,"ne","","",26,null],[11,"hash","","",26,null],[11,"to_tokens","","",27,null],[11,"fmt","","",27,null],[11,"clone","","",27,null],[11,"eq","","",27,null],[11,"ne","","",27,null],[11,"hash","","",27,null],[11,"to_tokens","","",2,null],[11,"to_tokens","","",28,null],[11,"to_tokens","","",1,null],[11,"to_tokens","","",29,null],[11,"fmt","","",2,null],[11,"clone","","",2,null],[11,"eq","","",2,null],[11,"ne","","",2,null],[11,"hash","","",2,null],[11,"fmt","","",28,null],[11,"clone","","",28,null],[11,"eq","","",28,null],[11,"ne","","",28,null],[11,"hash","","",28,null],[11,"fields","","",28,null],[11,"fields_mut","","",28,null],[11,"fmt","","",1,null],[11,"clone","","",1,null],[11,"eq","","",1,null],[11,"ne","","",1,null],[11,"hash","","",1,null],[11,"fmt","","",29,null],[11,"clone","","",29,null],[11,"eq","","",29,null],[11,"ne","","",29,null],[11,"hash","","",29,null],[11,"to_tokens","","",3,null],[11,"to_tokens","","",50,null],[11,"to_tokens","","",51,null],[11,"to_tokens","","",52,null],[11,"to_tokens","","",4,null],[11,"to_tokens","","",5,null],[11,"to_tokens","","",6,null],[11,"to_tokens","","",31,null],[11,"to_tokens","","",8,null],[11,"to_tokens","","",32,null],[11,"to_tokens","","",7,null],[11,"to_tokens","","",10,null],[11,"to_tokens","","",9,null],[11,"fmt","","",3,null],[11,"clone","","",3,null],[11,"eq","","",3,null],[11,"ne","","",3,null],[11,"default","","",3,{"inputs":[],"output":{"name":"generics"}}],[11,"hash","","",3,null],[11,"fmt","","",50,null],[11,"fmt","","",51,null],[11,"fmt","","",52,null],[11,"split_for_impl","","Split a type&#39;s generics into the pieces required for impl&#39;ing a trait\nfor that type.",3,null],[11,"as_turbofish","","Turn a type&#39;s generics like `&lt;X, Y&gt;` into a turbofish like `::&lt;X, Y&gt;`.",51,null],[11,"fmt","","",4,null],[11,"clone","","",4,null],[11,"eq","","",4,null],[11,"ne","","",4,null],[11,"hash","","",4,null],[11,"new","","",4,{"inputs":[{"name":"t"}],"output":{"name":"self"}}],[11,"fmt","","",5,null],[11,"clone","","",5,null],[11,"eq","","",5,null],[11,"ne","","",5,null],[11,"hash","","",5,null],[11,"new","","",5,{"inputs":[{"name":"t"}],"output":{"name":"self"}}],[11,"fmt","","",6,null],[11,"clone","","",6,null],[11,"eq","","",6,null],[11,"ne","","",6,null],[11,"hash","","",6,null],[11,"fmt","","",31,null],[11,"clone","","",31,null],[11,"eq","","",31,null],[11,"ne","","",31,null],[11,"hash","","",31,null],[11,"fmt","","",30,null],[11,"clone","","",30,null],[11,"eq","","",30,null],[11,"hash","","",30,null],[11,"fmt","","",8,null],[11,"clone","","",8,null],[11,"eq","","",8,null],[11,"ne","","",8,null],[11,"default","","",8,{"inputs":[],"output":{"name":"whereclause"}}],[11,"hash","","",8,null],[11,"none","","",8,{"inputs":[],"output":{"name":"self"}}],[11,"fmt","","",32,null],[11,"clone","","",32,null],[11,"eq","","",32,null],[11,"ne","","",32,null],[11,"hash","","",32,null],[11,"fmt","","",7,null],[11,"clone","","",7,null],[11,"eq","","",7,null],[11,"ne","","",7,null],[11,"hash","","",7,null],[11,"fmt","","",10,null],[11,"clone","","",10,null],[11,"eq","","",10,null],[11,"ne","","",10,null],[11,"hash","","",10,null],[11,"fmt","","",9,null],[11,"clone","","",9,null],[11,"eq","","",9,null],[11,"ne","","",9,null],[11,"hash","","",9,null],[11,"to_tokens","","",53,null],[11,"fmt","","",53,null],[11,"clone","","",53,null],[11,"hash","","",53,null],[11,"new","","",53,{"inputs":[{"name":"t"}],"output":{"name":"self"}}],[11,"from","","",53,{"inputs":[{"name":"str"}],"output":{"name":"self"}}],[11,"from","","",53,{"inputs":[{"name":"cow"}],"output":{"name":"self"}}],[11,"from","","",53,{"inputs":[{"name":"string"}],"output":{"name":"self"}}],[11,"from","","",53,{"inputs":[{"name":"usize"}],"output":{"name":"self"}}],[11,"as_ref","","",53,null],[11,"fmt","","",53,null],[11,"eq","","",53,null],[11,"to_tokens","","",35,null],[11,"fmt","","",34,null],[11,"fmt","","",33,null],[11,"fmt","","",35,null],[11,"clone","","",35,null],[11,"eq","","",35,null],[11,"ne","","",35,null],[11,"hash","","",35,null],[11,"fmt","","",36,null],[11,"clone","","",36,null],[11,"eq","","",36,null],[11,"ne","","",36,null],[11,"hash","","",36,null],[11,"from","","",35,{"inputs":[{"name":"string"}],"output":{"name":"lit"}}],[11,"from","","",35,{"inputs":[{"name":"str"}],"output":{"name":"lit"}}],[11,"from","","",35,{"inputs":[{"name":"vec"}],"output":{"name":"lit"}}],[11,"from","","",35,null],[11,"from","","",35,{"inputs":[{"name":"char"}],"output":{"name":"lit"}}],[11,"from","","",35,{"inputs":[{"name":"bool"}],"output":{"name":"lit"}}],[11,"fmt","","",34,null],[11,"clone","","",34,null],[11,"eq","","",34,null],[11,"hash","","",34,null],[11,"fmt","","",33,null],[11,"clone","","",33,null],[11,"eq","","",33,null],[11,"hash","","",33,null],[11,"from","","",35,{"inputs":[{"name":"isize"}],"output":{"name":"lit"}}],[11,"from","","",35,{"inputs":[{"name":"i8"}],"output":{"name":"lit"}}],[11,"from","","",35,{"inputs":[{"name":"i16"}],"output":{"name":"lit"}}],[11,"from","","",35,{"inputs":[{"name":"i32"}],"output":{"name":"lit"}}],[11,"from","","",35,{"inputs":[{"name":"i64"}],"output":{"name":"lit"}}],[11,"from","","",35,{"inputs":[{"name":"usize"}],"output":{"name":"lit"}}],[11,"from","","",35,{"inputs":[{"name":"u8"}],"output":{"name":"lit"}}],[11,"from","","",35,{"inputs":[{"name":"u16"}],"output":{"name":"lit"}}],[11,"from","","",35,{"inputs":[{"name":"u32"}],"output":{"name":"lit"}}],[11,"from","","",35,{"inputs":[{"name":"u64"}],"output":{"name":"lit"}}],[11,"from","","",35,{"inputs":[{"name":"f32"}],"output":{"name":"lit"}}],[11,"from","","",35,{"inputs":[{"name":"f64"}],"output":{"name":"lit"}}],[11,"to_tokens","","",12,null],[11,"to_tokens","","",40,null],[11,"to_tokens","","",11,null],[11,"to_tokens","","",39,null],[11,"to_tokens","","",37,null],[11,"fmt","","",12,null],[11,"clone","","",12,null],[11,"eq","","",12,null],[11,"ne","","",12,null],[11,"hash","","",12,null],[11,"fmt","","",40,null],[11,"clone","","",40,null],[11,"eq","","",40,null],[11,"ne","","",40,null],[11,"hash","","",40,null],[11,"fmt","","",11,null],[11,"clone","","",11,null],[11,"eq","","",11,null],[11,"ne","","",11,null],[11,"hash","","",11,null],[11,"fmt","","",39,null],[11,"clone","","",39,null],[11,"eq","","",39,null],[11,"ne","","",39,null],[11,"hash","","",39,null],[11,"fmt","","",37,null],[11,"clone","","",37,null],[11,"eq","","",37,null],[11,"hash","","",37,null],[11,"fmt","","",38,null],[11,"clone","","",38,null],[11,"eq","","",38,null],[11,"hash","","",38,null],[11,"to_tokens","","",13,null],[11,"fmt","","",13,null],[11,"clone","","",13,null],[11,"eq","","",13,null],[11,"ne","","",13,null],[11,"hash","","",13,null],[11,"fmt","","",41,null],[11,"clone","","",41,null],[11,"eq","","",41,null],[11,"ne","","",41,null],[11,"hash","","",41,null],[11,"op","","",42,null],[11,"assign_op","","",42,null],[11,"to_tokens","","",42,null],[11,"op","","",43,null],[11,"to_tokens","","",43,null],[11,"fmt","","",42,null],[11,"clone","","",42,null],[11,"eq","","",42,null],[11,"hash","","",42,null],[11,"fmt","","",43,null],[11,"clone","","",43,null],[11,"eq","","",43,null],[11,"hash","","",43,null],[11,"to_tokens","","",48,null],[11,"to_tokens","","",46,null],[11,"to_tokens","","",19,null],[11,"to_tokens","","",20,null],[11,"to_tokens","","",47,null],[11,"to_tokens","","",14,null],[11,"to_tokens","","",23,null],[11,"to_tokens","","",18,null],[11,"to_tokens","","",21,null],[11,"to_tokens","","",16,null],[11,"to_tokens","","",15,null],[11,"to_tokens","","",49,null],[11,"to_tokens","","",44,null],[11,"fmt","","",48,null],[11,"clone","","",48,null],[11,"eq","","",48,null],[11,"ne","","",48,null],[11,"hash","","",48,null],[11,"fmt","","",17,null],[11,"clone","","",17,null],[11,"eq","","",17,null],[11,"ne","","",17,null],[11,"hash","","",17,null],[11,"fmt","","",46,null],[11,"clone","","",46,null],[11,"eq","","",46,null],[11,"hash","","",46,null],[11,"fmt","","",19,null],[11,"clone","","",19,null],[11,"eq","","",19,null],[11,"ne","","",19,null],[11,"hash","","",19,null],[11,"from","","",19,{"inputs":[{"name":"t"}],"output":{"name":"self"}}],[11,"fmt","","",20,null],[11,"clone","","",20,null],[11,"eq","","",20,null],[11,"ne","","",20,null],[11,"hash","","",20,null],[11,"from","","",20,{"inputs":[{"name":"t"}],"output":{"name":"self"}}],[11,"fmt","","",47,null],[11,"clone","","",47,null],[11,"eq","","",47,null],[11,"ne","","",47,null],[11,"hash","","",47,null],[11,"none","","",47,{"inputs":[],"output":{"name":"self"}}],[11,"is_empty","","",47,null],[11,"fmt","","",14,null],[11,"clone","","",14,null],[11,"eq","","",14,null],[11,"ne","","",14,null],[11,"default","","",14,{"inputs":[],"output":{"name":"anglebracketedparameterdata"}}],[11,"hash","","",14,null],[11,"fmt","","",23,null],[11,"clone","","",23,null],[11,"eq","","",23,null],[11,"ne","","",23,null],[11,"hash","","",23,null],[11,"fmt","","",18,null],[11,"clone","","",18,null],[11,"eq","","",18,null],[11,"ne","","",18,null],[11,"hash","","",18,null],[11,"fmt","","",21,null],[11,"clone","","",21,null],[11,"eq","","",21,null],[11,"ne","","",21,null],[11,"hash","","",21,null],[11,"fmt","","",22,null],[11,"clone","","",22,null],[11,"eq","","",22,null],[11,"ne","","",22,null],[11,"hash","","",22,null],[11,"fmt","","",16,null],[11,"clone","","",16,null],[11,"eq","","",16,null],[11,"ne","","",16,null],[11,"hash","","",16,null],[11,"fmt","","",49,null],[11,"clone","","",49,null],[11,"eq","","",49,null],[11,"hash","","",49,null],[11,"fmt","","",44,null],[11,"clone","","",44,null],[11,"eq","","",44,null],[11,"ne","","",44,null],[11,"hash","","",44,null],[11,"fmt","","",15,null],[11,"clone","","",15,null],[11,"eq","","",15,null],[11,"ne","","",15,null],[11,"hash","","",15,null],[11,"fmt","","",45,null],[11,"clone","","",45,null],[11,"eq","","",45,null],[11,"ne","","",45,null],[11,"hash","","",45,null]],"paths":[[3,"Attribute"],[3,"Field"],[3,"Variant"],[3,"Generics"],[3,"Lifetime"],[3,"LifetimeDef"],[3,"TyParam"],[3,"WhereBoundPredicate"],[3,"WhereClause"],[3,"WhereEqPredicate"],[3,"WhereRegionPredicate"],[3,"Delimited"],[3,"Mac"],[3,"DeriveInput"],[3,"AngleBracketedParameterData"],[3,"BareFnArg"],[3,"BareFnTy"],[3,"MutTy"],[3,"ParenthesizedParameterData"],[3,"Path"],[3,"PathSegment"],[3,"PolyTraitRef"],[3,"QSelf"],[3,"TypeBinding"],[4,"AttrStyle"],[4,"MetaItem"],[4,"NestedMetaItem"],[4,"ConstExpr"],[4,"VariantData"],[4,"Visibility"],[4,"TraitBoundModifier"],[4,"TyParamBound"],[4,"WherePredicate"],[4,"FloatTy"],[4,"IntTy"],[4,"Lit"],[4,"StrStyle"],[4,"BinOpToken"],[4,"DelimToken"],[4,"Token"],[4,"TokenTree"],[4,"Body"],[4,"BinOp"],[4,"UnOp"],[4,"Abi"],[4,"FunctionRetTy"],[4,"Mutability"],[4,"PathParameters"],[4,"Ty"],[4,"Unsafety"],[3,"ImplGenerics"],[3,"TyGenerics"],[3,"Turbofish"],[3,"Ident"]]};
searchIndex["unicode_xid"] = {"doc":"Determine if a `char` is a valid identifier for a parser and/or lexer according to\n[Unicode Standard Annex #31](http://www.unicode.org/reports/tr31/) rules.","items":[[17,"UNICODE_VERSION","unicode_xid","The version of [Unicode](http://www.unicode.org/)\nthat this version of unicode-xid is based on.",null,null],[8,"UnicodeXID","","Methods for determining if a character is a valid identifier character.",null,null],[10,"is_xid_start","","Returns whether the specified character satisfies the &#39;XID_Start&#39;\nUnicode property.",0,null],[10,"is_xid_continue","","Returns whether the specified `char` satisfies the &#39;XID_Continue&#39;\nUnicode property.",0,null]],"paths":[[8,"UnicodeXID"]]};
initSearch(searchIndex);
