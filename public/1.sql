PGDMP     :            
    	    x            cuconf    11.7    11.3 	    �           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                       false            �           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                       false            �           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                       false            �           1262    87286    cuconf    DATABASE     d   CREATE DATABASE cuconf WITH TEMPLATE = template0 ENCODING = 'UTF8' LC_COLLATE = 'C' LC_CTYPE = 'C';
    DROP DATABASE cuconf;
             postgres    false            �            1259    87353    t_fieldvalue    TABLE     p   CREATE TABLE public.t_fieldvalue (
    field name,
    langid integer,
    val text,
    id integer NOT NULL
);
     DROP TABLE public.t_fieldvalue;
       public         postgres    false            �            1259    87365    t_fieldvalue_id_seq    SEQUENCE     �   ALTER TABLE public.t_fieldvalue ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.t_fieldvalue_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public       postgres    false    209            �          0    87353    t_fieldvalue 
   TABLE DATA               >   COPY public.t_fieldvalue (field, langid, val, id) FROM stdin;
    public       postgres    false    209   c       �           0    0    t_fieldvalue_id_seq    SEQUENCE SET     A   SELECT pg_catalog.setval('public.t_fieldvalue_id_seq', 4, true);
            public       postgres    false    210            !           2606    87368    t_fieldvalue t_fieldvalue_pkey 
   CONSTRAINT     \   ALTER TABLE ONLY public.t_fieldvalue
    ADD CONSTRAINT t_fieldvalue_pkey PRIMARY KEY (id);
 H   ALTER TABLE ONLY public.t_fieldvalue DROP CONSTRAINT t_fieldvalue_pkey;
       public         postgres    false    209            �   �  x��T�nA<�_1��,��8� �p�_�#! Y qA\8#��z7٬�k)_��GTU��Kp��W�������9y����{�����9N��Z��� ���8��*���[�Q�l��ġ���zm�5Vp	P��m[� [Zp(F+uV�^r�c"
[���y��s05VqGkB�WD��	
!I�@$�S$���P�a{L�x�4�y����l��?������S��gN�)�i
����(�⏒�<"�WܭC�H�&���j��ȬQ����U�PhE���r��3:g�R����tE�eJ�[�/��PT��z�F[�Hî��qdF�p/; �̘��j���˽A���w�3_g��s�r�Cw�����e��4A��A+Ětzo����ԹG�q�A��ԭ����GGkfm�45TN,#D��7I�
 �
&�d����qM�Z�[�+���b��~��xS�J5W�M����Vعz�P�����-�;]��AF���V���A�Ə�~���H9lN7����f,g��͌i`�V��_��\ɔ���㾏�^/����&�̝��c⡃�(��S-�zk��B/V�����3o{�\���>~���^z����rf�$�Bc�+��7L��h�6W��p�ON-�B��egv���f�Ǹ<��e��ݸ����r�{���z� Ji�      