PGDMP                 
    	    x            cuconf    11.7    11.3 	    �           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                       false            �           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                       false            �           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                       false            �           1262    87286    cuconf    DATABASE     d   CREATE DATABASE cuconf WITH TEMPLATE = template0 ENCODING = 'UTF8' LC_COLLATE = 'C' LC_CTYPE = 'C';
    DROP DATABASE cuconf;
             postgres    false            �            1259    87348    t_lang    TABLE     b   CREATE TABLE public.t_lang (
    id integer NOT NULL,
    title name NOT NULL,
    langid name
);
    DROP TABLE public.t_lang;
       public         postgres    false            �            1259    87346    t_lang_id_seq    SEQUENCE     �   ALTER TABLE public.t_lang ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.t_lang_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public       postgres    false    208            �          0    87348    t_lang 
   TABLE DATA               3   COPY public.t_lang (id, title, langid) FROM stdin;
    public       postgres    false    208   �       �           0    0    t_lang_id_seq    SEQUENCE SET     ;   SELECT pg_catalog.setval('public.t_lang_id_seq', 2, true);
            public       postgres    false    207            !           2606    87352    t_lang t_lang_pkey 
   CONSTRAINT     P   ALTER TABLE ONLY public.t_lang
    ADD CONSTRAINT t_lang_pkey PRIMARY KEY (id);
 <   ALTER TABLE ONLY public.t_lang DROP CONSTRAINT t_lang_pkey;
       public         postgres    false    208            �   )   x�3�*-.�L��,*-�2�t�K��,��L�K����� ��	�     