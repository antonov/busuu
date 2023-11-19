PGDMP  #    7            
    {            exercises_db     13.13 (Debian 13.13-1.pgdg120+1)    16.0     �           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            �           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            �           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            �           1262    16384    exercises_db    DATABASE     w   CREATE DATABASE exercises_db WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'en_US.utf8';
    DROP DATABASE exercises_db;
                busuu    false                        2615    2200    public    SCHEMA     2   -- *not* creating schema, since initdb creates it
 2   -- *not* dropping schema, since initdb creates it
                busuu    false            �           0    0    SCHEMA public    ACL     Q   REVOKE USAGE ON SCHEMA public FROM PUBLIC;
GRANT ALL ON SCHEMA public TO PUBLIC;
                   busuu    false    5                        3079    16385 	   uuid-ossp 	   EXTENSION     ?   CREATE EXTENSION IF NOT EXISTS "uuid-ossp" WITH SCHEMA public;
    DROP EXTENSION "uuid-ossp";
                   false    5            �           0    0    EXTENSION "uuid-ossp"    COMMENT     W   COMMENT ON EXTENSION "uuid-ossp" IS 'generate universally unique identifiers (UUIDs)';
                        false    2            �            1259    16402    exercise    TABLE     �   CREATE TABLE public.exercise (
    id uuid DEFAULT public.uuid_generate_v4() NOT NULL,
    content character varying NOT NULL,
    created_at timestamp without time zone DEFAULT now() NOT NULL,
    user_id uuid NOT NULL
);
    DROP TABLE public.exercise;
       public         heap    busuu    false    2    5    5            �            1259    16396    user    TABLE     �   CREATE TABLE public."user" (
    id uuid DEFAULT public.uuid_generate_v4() NOT NULL,
    name character varying(100) NOT NULL
);
    DROP TABLE public."user";
       public         heap    busuu    false    2    5    5            �          0    16402    exercise 
   TABLE DATA           D   COPY public.exercise (id, content, created_at, user_id) FROM stdin;
    public          busuu    false    202   K       �          0    16396    user 
   TABLE DATA           *   COPY public."user" (id, name) FROM stdin;
    public          busuu    false    201          P           2606    16411 '   exercise PK_a0f107e3a2ef2742c1e91d97c14 
   CONSTRAINT     g   ALTER TABLE ONLY public.exercise
    ADD CONSTRAINT "PK_a0f107e3a2ef2742c1e91d97c14" PRIMARY KEY (id);
 S   ALTER TABLE ONLY public.exercise DROP CONSTRAINT "PK_a0f107e3a2ef2742c1e91d97c14";
       public            busuu    false    202            N           2606    16401 #   user PK_cace4a159ff9f2512dd42373760 
   CONSTRAINT     e   ALTER TABLE ONLY public."user"
    ADD CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY (id);
 Q   ALTER TABLE ONLY public."user" DROP CONSTRAINT "PK_cace4a159ff9f2512dd42373760";
       public            busuu    false    201            Q           2606    16412 '   exercise FK_486d56516b64030a655861e1aa9    FK CONSTRAINT     �   ALTER TABLE ONLY public.exercise
    ADD CONSTRAINT "FK_486d56516b64030a655861e1aa9" FOREIGN KEY (user_id) REFERENCES public."user"(id);
 S   ALTER TABLE ONLY public.exercise DROP CONSTRAINT "FK_486d56516b64030a655861e1aa9";
       public          busuu    false    2894    202    201            �   �   x���-�@�aݞ����kR<��l��,�O�{�7�#2�Kh�+�1�w/�����r{�3���B����*��D�VX ��	�	������UY��us�#�)@�σ��_�~1���Ì�H� �/���!�U��F��_�y���a�m]���R�      �   @   x�K6I222�0�5O5L�51HN�M2�H�5�050K615KI��t,*I�Up�+���/����� �w	     