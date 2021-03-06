--
-- PostgreSQL database dump
--

-- Dumped from database version 11.7
-- Dumped by pg_dump version 11.3

-- Started on 2020-10-10 23:26:39 MSK

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_with_oids = false;

--
-- TOC entry 196 (class 1259 OID 87287)
-- Name: session; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.session (
    sid character varying NOT NULL,
    sess json NOT NULL,
    expire timestamp(6) without time zone NOT NULL
);


ALTER TABLE public.session OWNER TO rustv;

--
-- TOC entry 209 (class 1259 OID 87353)
-- Name: t_fieldvalue; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.t_fieldvalue (
    field name,
    langid integer,
    val text,
    id integer NOT NULL
);


ALTER TABLE public.t_fieldvalue OWNER TO rustv;

--
-- TOC entry 210 (class 1259 OID 87365)
-- Name: t_fieldvalue_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.t_fieldvalue ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.t_fieldvalue_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 208 (class 1259 OID 87348)
-- Name: t_lang; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.t_lang (
    id integer NOT NULL,
    title name NOT NULL,
    langid name
);


ALTER TABLE public.t_lang OWNER TO rustv;

--
-- TOC entry 207 (class 1259 OID 87346)
-- Name: t_lang_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.t_lang ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.t_lang_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 205 (class 1259 OID 87336)
-- Name: t_moderatorstosession; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.t_moderatorstosession (
    id integer NOT NULL,
    sessionid integer NOT NULL,
    speakerid integer NOT NULL,
    sort integer DEFAULT 0
);


ALTER TABLE public.t_moderatorstosession OWNER TO rustv;

--
-- TOC entry 204 (class 1259 OID 87334)
-- Name: t_moderatorstosession_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.t_moderatorstosession ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.t_moderatorstosession_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 213 (class 1259 OID 87375)
-- Name: t_q; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.t_q (
    id integer NOT NULL,
    text text,
    sessid integer,
    "isDeleted" boolean DEFAULT false,
    date timestamp with time zone,
    answer text,
    likes integer,
    "isSpk" boolean DEFAULT false NOT NULL
);


ALTER TABLE public.t_q OWNER TO rustv;

--
-- TOC entry 212 (class 1259 OID 87373)
-- Name: t_q_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.t_q ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.t_q_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 198 (class 1259 OID 87297)
-- Name: t_sessions; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.t_sessions (
    id integer NOT NULL,
    titleru text,
    titleen text,
    start timestamp with time zone,
    status integer DEFAULT 0 NOT NULL,
    img name DEFAULT '/img/tmp.svg'::name,
    ytru name,
    yten name,
    "end" timestamp with time zone
);


ALTER TABLE public.t_sessions OWNER TO rustv;

--
-- TOC entry 197 (class 1259 OID 87295)
-- Name: t_sessions_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.t_sessions ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.t_sessions_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 200 (class 1259 OID 87309)
-- Name: t_speakers; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.t_speakers (
    id integer NOT NULL,
    nameru name,
    nameen name,
    positionru text,
    positionen text,
    img name DEFAULT '/img/user.png'::name NOT NULL
);


ALTER TABLE public.t_speakers OWNER TO rustv;

--
-- TOC entry 202 (class 1259 OID 87320)
-- Name: t_speakerstosession; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.t_speakerstosession (
    id integer NOT NULL,
    sessionid integer NOT NULL,
    speakerid integer NOT NULL,
    sort integer DEFAULT 0
);


ALTER TABLE public.t_speakerstosession OWNER TO rustv;

--
-- TOC entry 201 (class 1259 OID 87318)
-- Name: t_speakersToSession_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.t_speakerstosession ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public."t_speakersToSession_id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 199 (class 1259 OID 87307)
-- Name: t_speakers_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.t_speakers ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.t_speakers_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 211 (class 1259 OID 87369)
-- Name: v_fields; Type: VIEW; Schema: public; Owner: postgres
--

CREATE VIEW public.v_fields AS
 SELECT v.field,
    v.langid,
    v.val,
    v.id,
    l.title AS langtitle,
    l.langid AS prefix
   FROM (public.t_fieldvalue v
     JOIN public.t_lang l ON ((l.id = v.langid)));


ALTER TABLE public.v_fields OWNER TO rustv;

--
-- TOC entry 206 (class 1259 OID 87342)
-- Name: v_modtosess; Type: VIEW; Schema: public; Owner: postgres
--

CREATE VIEW public.v_modtosess AS
 SELECT s.id,
    s.nameru,
    s.nameen,
    s.positionru,
    s.positionen,
    s.img,
    rel.id AS moderatorstosessionid,
    rel.sessionid,
    rel.sort
   FROM (public.t_speakers s
     JOIN public.t_moderatorstosession rel ON ((rel.speakerid = s.id)));


ALTER TABLE public.v_modtosess OWNER TO rustv;

--
-- TOC entry 214 (class 1259 OID 87385)
-- Name: v_q; Type: VIEW; Schema: public; Owner: postgres
--

CREATE VIEW public.v_q AS
 SELECT q.id,
    q.text,
    q.sessid,
    q."isDeleted",
    q.date,
    q.answer,
    q.likes,
    q."isSpk",
    s.titleru AS sesstitle
   FROM (public.t_q q
     JOIN public.t_sessions s ON ((q.sessid = s.id)));


ALTER TABLE public.v_q OWNER TO rustv;

--
-- TOC entry 203 (class 1259 OID 87330)
-- Name: v_spktosess; Type: VIEW; Schema: public; Owner: postgres
--

CREATE VIEW public.v_spktosess WITH (security_barrier='false') AS
 SELECT s.id,
    s.nameru,
    s.nameen,
    s.positionru,
    s.positionen,
    s.img,
    rel.id AS speakerstosessionid,
    rel.sessionid,
    rel.sort
   FROM (public.t_speakers s
     JOIN public.t_speakerstosession rel ON ((rel.speakerid = s.id)));


ALTER TABLE public.v_spktosess OWNER TO rustv;

--
-- TOC entry 3264 (class 0 OID 87287)
-- Dependencies: 196
-- Data for Name: session; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.session (sid, sess, expire) FROM stdin;
G0zmXSq_SnQ60ZPm9onfxrDJTRXL2ozo	{"cookie":{"originalMaxAge":86400000,"expires":"2020-10-11T17:02:53.910Z","httpOnly":true,"path":"/"},"admin":true}	2020-10-11 23:26:39
4uYs5Kvnelo21WU-K8eK6ISm3zF39CaG	{"cookie":{"originalMaxAge":86400000,"expires":"2020-10-10T16:05:56.803Z","httpOnly":true,"path":"/"},"admin":true}	2020-10-11 18:51:18
mkQoPl_rPNwU0M_rTwIpLp4c48xJyRBb	{"cookie":{"originalMaxAge":86400000,"expires":"2020-10-11T16:06:16.480Z","httpOnly":true,"path":"/"}}	2020-10-11 19:06:17
YfyH4y27U7PNsbXsDd49DFzOVjpebl6Z	{"cookie":{"originalMaxAge":86400000,"expires":"2020-10-11T09:42:09.618Z","httpOnly":true,"path":"/"}}	2020-10-11 12:42:10
XalCrw2PLjqqOuQvUNUBtItqVn5TG7MV	{"cookie":{"originalMaxAge":86400000,"expires":"2020-10-11T09:42:08.111Z","httpOnly":true,"path":"/"}}	2020-10-11 12:42:10
\.


--
-- TOC entry 3275 (class 0 OID 87353)
-- Dependencies: 209
-- Data for Name: t_fieldvalue; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.t_fieldvalue (field, langid, val, id) FROM stdin;
block0	1	["Вызовы, появившиеся во время пандемии, открыли новые возможности для обучения и привели к вынужденной трансформации образовательных программ.","Важно ли в новой реальности продолжать обучение?","Как развивать стойких лидеров и перепрофилировать специалистов в разгар кризиса?","Можно ли сократить затраты, не потеряв на качестве обучения?"]	1
block0	2	["Вызовы, появившиеся во время пандемии, открыли новые возможности для обучения и привели к вынужденной трансформации образовательных программ. ","Важно ли в новой реальности продолжать обучение?","Как развивать стойких лидеров и перепрофилировать специалистов в разгар кризиса?","Можно ли сократить затраты, не потеряв на качестве обучения?"]	3
block1	2	["Эти и другие актуальные вопросы обсудят руководители крупнейших российских и международных компаний и корпоративных университетов, ректоры передовых университетов и бизнес-школ мира, а также ведущие эксперты в сфере образования на главное образовательной конференции в области L&D.","Конференция организована совместно с Европейским фондом развития менеджмента (EFMD) при участии Благотворительного фонда Сбербанка «Вклад в будущее»."]	4
block1	1	["Эти и другие актуальные вопросы обсудят руководители крупнейших российских и международных компаний и корпоративных университетов, ректоры передовых университетов и бизнес-школ мира, а также ведущие эксперты в сфере образования на главное образовательной конференции в области L&D.","Конференция организована совместно с Европейским фондом развития менеджмента (EFMD) при участии Благотворительного фонда Сбербанка «Вклад в будущее»."]	2
\.


--
-- TOC entry 3274 (class 0 OID 87348)
-- Dependencies: 208
-- Data for Name: t_lang; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.t_lang (id, title, langid) FROM stdin;
1	Russian	rus
2	English	eng
\.


--
-- TOC entry 3272 (class 0 OID 87336)
-- Dependencies: 205
-- Data for Name: t_moderatorstosession; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.t_moderatorstosession (id, sessionid, speakerid, sort) FROM stdin;
15	11	10	0
16	11	11	0
17	13	10	0
18	13	12	0
20	12	10	0
\.


--
-- TOC entry 3278 (class 0 OID 87375)
-- Dependencies: 213
-- Data for Name: t_q; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.t_q (id, text, sessid, "isDeleted", date, answer, likes, "isSpk") FROM stdin;
39	1122	11	t	2020-10-10 20:25:46.799+03	\N	0	f
40	121212	11	t	2020-10-10 20:28:32.497+03	\N	0	f
41	sscsvc	11	t	2020-10-10 20:30:25.842+03	\N	0	f
1	sfsfs	13	t	2020-10-10 12:53:02.235+03	\N	4	f
2	dvd efe	13	t	2020-10-10 12:53:09.994+03	\N	4	f
3	dvd efe	13	t	2020-10-10 12:53:10.182+03	\N	4	f
4	dvd efe ef fe 	13	t	2020-10-10 12:53:24.2+03	\N	4	f
5	dvd efe ef fe 	13	t	2020-10-10 12:53:24.385+03	\N	4	f
6	ev efevf	13	t	2020-10-10 12:53:51.365+03	\N	4	f
7	efvfe fe 	13	t	2020-10-10 12:53:54.624+03	\N	4	f
8	f f fe fe 	13	t	2020-10-10 12:53:58.497+03	\N	4	f
9	sss	13	t	2020-10-10 13:06:16.387+03	\N	4	f
10	dd d	13	t	2020-10-10 13:06:51.786+03	\N	4	f
11	ccc	13	t	2020-10-10 13:07:16.022+03	\N	4	f
12	cdd	13	t	2020-10-10 13:07:23.078+03	\N	4	f
53	1111	11	t	2020-10-10 21:39:07.754+03	\N	0	f
43	пишу вопрос второму спикеру	11	t	2020-10-10 20:31:07.328+03	\N	0	f
13	dsfs	13	t	2020-10-10 13:07:47.715+03	\N	4	f
14	dvcsdvd	13	t	2020-10-10 13:08:36.874+03	\N	4	f
15	ddddd	13	t	2020-10-10 13:08:42.268+03	\N	4	f
16	dd	13	t	2020-10-10 13:08:47.137+03	\N	4	f
17	dsfedf	13	t	2020-10-10 13:10:12.751+03	\N	4	f
18	fsv sc	13	t	2020-10-10 13:10:26.327+03	\N	4	f
19	fefe	13	t	2020-10-10 13:10:55.736+03	\N	4	f
20	vedv	13	t	2020-10-10 13:10:59.82+03	\N	5	f
21	fdvdfbvf	13	t	2020-10-10 13:11:34.928+03	\N	4	f
22	 vdwvdv]	13	t	2020-10-10 13:11:38.293+03	\N	5	f
23	 vdwv dwvdwvw	13	t	2020-10-10 13:11:40.585+03	\N	4	f
25	de. ef 	13	t	2020-10-10 13:25:01.318+03	\N	0	f
26	привед, большой медвед	13	t	2020-10-10 13:25:10.091+03	\N	0	f
32	dvcdwv	11	t	2020-10-10 14:46:59.675+03	\N	1	f
33	wdvdwv	11	t	2020-10-10 14:47:00.568+03	\N	0	f
35	wevdev	11	t	2020-10-10 14:47:02.47+03	\N	1	f
34	wdvdwv	11	t	2020-10-10 14:47:01.532+03	\N	0	f
54	11111	11	t	2020-10-10 21:48:11.377+03	english	1	f
49	rrt r	11	t	2020-10-10 21:33:19.399+03	ffff evedv	1	f
48	 rr 	11	t	2020-10-10 21:33:17.459+03	\N	1	f
47	er rt r r	11	t	2020-10-10 21:33:16.262+03	\N	1	f
46	ef fe r	11	t	2020-10-10 21:33:14.302+03	\N	0	f
45	evevev ee e	11	t	2020-10-10 21:33:12.262+03	\N	0	f
44	erver	11	t	2020-10-10 21:33:09.881+03	\N	0	f
42	пишу вопрос спикеру	11	t	2020-10-10 20:30:52.924+03	\N	0	f
50	1111	11	t	2020-10-10 21:34:44.319+03	\N	0	f
51	12121	11	t	2020-10-10 21:34:46.528+03	\N	0	f
52	111	11	t	2020-10-10 21:38:21.624+03	\N	0	f
55	eee	11	t	2020-10-10 22:11:02.762+03	\N	0	f
38	vwwevw	11	t	2020-10-10 14:47:07.82+03	\N	1	f
24	 dw dw fw]	13	t	2020-10-10 13:11:43.465+03	\N	4	f
27	edve	11	t	2020-10-10 14:38:27.508+03	\N	0	f
28	evvevv efe 	11	t	2020-10-10 14:38:30.2+03	\N	0	f
29	e ef e e  ef	11	t	2020-10-10 14:38:32.757+03	\N	0	f
30	e e rf ff e 	11	t	2020-10-10 14:38:36.379+03	\N	0	f
31	e fe eefe 	11	t	2020-10-10 14:38:39.152+03	\N	0	f
37	wdvdwvdwv	11	t	2020-10-10 14:47:05.649+03	\N	1	f
36	wdvdwvdvd	11	t	2020-10-10 14:47:03.797+03	\N	0	f
\.


--
-- TOC entry 3266 (class 0 OID 87297)
-- Dependencies: 198
-- Data for Name: t_sessions; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.t_sessions (id, titleru, titleen, start, status, img, ytru, yten, "end") FROM stdin;
14	планировщик русский	\N	2020-09-23 14:00:00+03	1	"/files/58f2ef07-32c4-4241-bcc5-57d5f9215636.png"	\N	\N	2020-09-23 15:00:00+03
11	первая	\N	2020-09-23 20:00:00+03	1	/img/tmp.svg	wkpnP-2ifnU	VAahigoq0UM	2020-09-23 21:00:00+03
13	название русское	название англ	2020-09-23 15:30:00+03	1	/img/tmp.svg	\N	\N	\N
12	вторая сессия	\N	2020-09-23 12:30:00+03	1	"/files/578bb418-844e-4bf1-bffd-e92daff51404.png"	\N	\N	2020-09-23 15:00:00+03
\.


--
-- TOC entry 3268 (class 0 OID 87309)
-- Dependencies: 200
-- Data for Name: t_speakers; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.t_speakers (id, nameru, nameen, positionru, positionen, img) FROM stdin;
10	Лев Толстой	Lev Tolstoy	писатель	writer	/img/user.png
12	Себастьян Бах	Sebastian Bach	Композитор	Composier	/img/user.png
11	Владимир Ленин	Vladimir Lenin	Вождь	Leader	"/files/459dba5b-08ca-444a-bdbd-32b75a7a6c4b.jpg"
\.


--
-- TOC entry 3270 (class 0 OID 87320)
-- Dependencies: 202
-- Data for Name: t_speakerstosession; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.t_speakerstosession (id, sessionid, speakerid, sort) FROM stdin;
40	14	12	0
38	13	10	0
36	12	11	0
41	13	11	0
42	13	12	0
32	11	12	0
35	11	11	0
\.


--
-- TOC entry 3284 (class 0 OID 0)
-- Dependencies: 210
-- Name: t_fieldvalue_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.t_fieldvalue_id_seq', 4, true);


--
-- TOC entry 3285 (class 0 OID 0)
-- Dependencies: 207
-- Name: t_lang_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.t_lang_id_seq', 2, true);


--
-- TOC entry 3286 (class 0 OID 0)
-- Dependencies: 204
-- Name: t_moderatorstosession_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.t_moderatorstosession_id_seq', 20, true);


--
-- TOC entry 3287 (class 0 OID 0)
-- Dependencies: 212
-- Name: t_q_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.t_q_id_seq', 55, true);


--
-- TOC entry 3288 (class 0 OID 0)
-- Dependencies: 197
-- Name: t_sessions_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.t_sessions_id_seq', 14, true);


--
-- TOC entry 3289 (class 0 OID 0)
-- Dependencies: 201
-- Name: t_speakersToSession_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."t_speakersToSession_id_seq"', 42, true);


--
-- TOC entry 3290 (class 0 OID 0)
-- Dependencies: 199
-- Name: t_speakers_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.t_speakers_id_seq', 12, true);


--
-- TOC entry 3124 (class 2606 OID 87294)
-- Name: session session_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.session
    ADD CONSTRAINT session_pkey PRIMARY KEY (sid);


--
-- TOC entry 3136 (class 2606 OID 87368)
-- Name: t_fieldvalue t_fieldvalue_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.t_fieldvalue
    ADD CONSTRAINT t_fieldvalue_pkey PRIMARY KEY (id);


--
-- TOC entry 3134 (class 2606 OID 87352)
-- Name: t_lang t_lang_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.t_lang
    ADD CONSTRAINT t_lang_pkey PRIMARY KEY (id);


--
-- TOC entry 3132 (class 2606 OID 87341)
-- Name: t_moderatorstosession t_moderatorssToSession_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.t_moderatorstosession
    ADD CONSTRAINT "t_moderatorssToSession_pkey" PRIMARY KEY (id);


--
-- TOC entry 3138 (class 2606 OID 87384)
-- Name: t_q t_q_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.t_q
    ADD CONSTRAINT t_q_pkey PRIMARY KEY (id);


--
-- TOC entry 3126 (class 2606 OID 87301)
-- Name: t_sessions t_sessions_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.t_sessions
    ADD CONSTRAINT t_sessions_pkey PRIMARY KEY (id);


--
-- TOC entry 3130 (class 2606 OID 87324)
-- Name: t_speakerstosession t_speakersToSession_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.t_speakerstosession
    ADD CONSTRAINT "t_speakersToSession_pkey" PRIMARY KEY (id);


--
-- TOC entry 3128 (class 2606 OID 87317)
-- Name: t_speakers t_speakers_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.t_speakers
    ADD CONSTRAINT t_speakers_pkey PRIMARY KEY (id);


-- Completed on 2020-10-10 23:26:39 MSK

--
-- PostgreSQL database dump complete
--

