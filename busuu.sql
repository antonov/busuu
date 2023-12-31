--
-- PostgreSQL database dump
--

-- Dumped from database version 13.13 (Debian 13.13-1.pgdg120+1)
-- Dumped by pg_dump version 13.13 (Debian 13.13-1.pgdg120+1)

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

--
-- Name: uuid-ossp; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS "uuid-ossp" WITH SCHEMA public;


--
-- Name: EXTENSION "uuid-ossp"; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION "uuid-ossp" IS 'generate universally unique identifiers (UUIDs)';


SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: exercise; Type: TABLE; Schema: public; Owner: busuu
--

CREATE TABLE public.exercise (
    id uuid DEFAULT public.uuid_generate_v4() NOT NULL,
    content character varying NOT NULL,
    created_at timestamp without time zone DEFAULT now() NOT NULL,
    user_id uuid NOT NULL
);


ALTER TABLE public.exercise OWNER TO busuu;

--
-- Name: user; Type: TABLE; Schema: public; Owner: busuu
--

CREATE TABLE public."user" (
    id uuid DEFAULT public.uuid_generate_v4() NOT NULL,
    name character varying(100) NOT NULL
);


ALTER TABLE public."user" OWNER TO busuu;

--
-- Data for Name: exercise; Type: TABLE DATA; Schema: public; Owner: busuu
--

COPY public.exercise (id, content, created_at, user_id) FROM stdin;
44fdf47c-0aa5-47cf-868e-b97d1b7b1877	Exercise 1	2023-11-19 23:37:43.731	c4b22487-7e1e-40cf-b28f-38506c456df8
534ce50a-dffe-415a-a12b-52af93ca12dc	Exercise 2	2023-11-19 23:37:24.127	c4b22487-7e1e-40cf-b28f-38506c456df8
724e25ee-ce0d-48e8-b6b8-c48544305bbe	Exercise 3	2023-11-19 23:37:33.108	c4b22487-7e1e-40cf-b28f-38506c456df8
d22692e2-67ad-44d7-baa5-535647ed89b5	Exercise 4	2023-11-20 13:32:43.697	c4b22487-7e1e-40cf-b28f-38506c456df8
\.


--
-- Data for Name: user; Type: TABLE DATA; Schema: public; Owner: busuu
--

COPY public."user" (id, name) FROM stdin;
c4b22487-7e1e-40cf-b28f-38506c456df8	Artem Antonov
\.


--
-- Name: exercise PK_a0f107e3a2ef2742c1e91d97c14; Type: CONSTRAINT; Schema: public; Owner: busuu
--

ALTER TABLE ONLY public.exercise
    ADD CONSTRAINT "PK_a0f107e3a2ef2742c1e91d97c14" PRIMARY KEY (id);


--
-- Name: user PK_cace4a159ff9f2512dd42373760; Type: CONSTRAINT; Schema: public; Owner: busuu
--

ALTER TABLE ONLY public."user"
    ADD CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY (id);


--
-- Name: exercise FK_486d56516b64030a655861e1aa9; Type: FK CONSTRAINT; Schema: public; Owner: busuu
--

ALTER TABLE ONLY public.exercise
    ADD CONSTRAINT "FK_486d56516b64030a655861e1aa9" FOREIGN KEY (user_id) REFERENCES public."user"(id);


--
-- PostgreSQL database dump complete
--

