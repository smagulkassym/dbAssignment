--
-- PostgreSQL database dump
--

-- Dumped from database version 15.0
-- Dumped by pg_dump version 15.0

-- Started on 2022-11-22 04:24:46

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

SET default_table_access_method = heap;

--
-- TOC entry 215 (class 1259 OID 19101)
-- Name: country; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.country (
    cname character varying(50) NOT NULL,
    population bigint
);


ALTER TABLE public.country OWNER TO postgres;

--
-- TOC entry 217 (class 1259 OID 19116)
-- Name: discover; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.discover (
    cname character varying(50) NOT NULL,
    disease_code character varying(50) NOT NULL,
    first_enc_date date NOT NULL
);


ALTER TABLE public.discover OWNER TO postgres;

--
-- TOC entry 216 (class 1259 OID 19106)
-- Name: disease; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.disease (
    disease_code character varying(50) NOT NULL,
    pathogen character varying(20),
    description character varying(140),
    id integer
);


ALTER TABLE public.disease OWNER TO postgres;

--
-- TOC entry 214 (class 1259 OID 19096)
-- Name: diseasetype; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.diseasetype (
    id integer NOT NULL,
    description character varying(140)
);


ALTER TABLE public.diseasetype OWNER TO postgres;

--
-- TOC entry 220 (class 1259 OID 19151)
-- Name: doctor; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.doctor (
    email character varying(60) NOT NULL,
    degree character varying(20)
);


ALTER TABLE public.doctor OWNER TO postgres;

--
-- TOC entry 219 (class 1259 OID 19141)
-- Name: publicservant; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.publicservant (
    email character varying(60) NOT NULL,
    department character varying(50)
);


ALTER TABLE public.publicservant OWNER TO postgres;

--
-- TOC entry 222 (class 1259 OID 19176)
-- Name: record; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.record (
    email character varying(60) NOT NULL,
    cname character varying(50) NOT NULL,
    disease_code character varying(50) NOT NULL,
    total_deaths integer,
    total_patients integer
);


ALTER TABLE public.record OWNER TO postgres;

--
-- TOC entry 221 (class 1259 OID 19161)
-- Name: specialize; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.specialize (
    id integer NOT NULL,
    email character varying(60) NOT NULL
);


ALTER TABLE public.specialize OWNER TO postgres;

--
-- TOC entry 218 (class 1259 OID 19131)
-- Name: users; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.users (
    email character varying(60) NOT NULL,
    name character varying(30),
    surname character varying(40),
    salary integer,
    phone character varying(20),
    cname character varying(50)
);


ALTER TABLE public.users OWNER TO postgres;

--
-- TOC entry 3377 (class 0 OID 19101)
-- Dependencies: 215
-- Data for Name: country; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.country (cname, population) FROM stdin;
China	1439323776
India	1380004385
United States	331002651
Russia	145934462
Germany	83783942
Democratic Republic of Congo	89561403
United Kingdom	67886011
France	65273511
Tanzania	59734218
Italy	60461826
Republic of Crimea	1903707
Israel	8655535
Kazakhstan	19309097
Japan	125559591
\.


--
-- TOC entry 3379 (class 0 OID 19116)
-- Dependencies: 217
-- Data for Name: discover; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.discover (cname, disease_code, first_enc_date) FROM stdin;
Republic of Crimea	Bubonic Plague	1347-01-01
India	Cholera	1817-01-01
China	COVID-19	2019-12-31
Democratic Republic of Congo	EVD	1976-01-01
Russia	Genital Herpes	2022-02-24
Russia	Oral Herpes	2014-02-20
India	Hepatitis E	1955-01-01
Democratic Republic of Congo	HIV/AIDS	1959-01-01
Italy	Syphilis	1495-01-01
Israel	Tuberculosis	1882-01-01
China	SARS	2002-01-01
\.


--
-- TOC entry 3378 (class 0 OID 19106)
-- Dependencies: 216
-- Data for Name: disease; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.disease (disease_code, pathogen, description, id) FROM stdin;
Bubonic Plague	bacteria	Plague is a disease that affects humans and other mammals. It is caused by the bacterium, Yersinia pestis.	11
Genital Herpes	virus	Genital herpes is a common sexually transmitted infection caused by the herpes simplex virus (HSV).	12
Hepatitis A	virus	Hepatitis A is an inflammation of the liver caused by the hepatitis A virus (HAV).	8
Hepatitis B	virus	Hepatitis B is a serious liver infection caused by the hepatitis B virus (HBV).	8
Hepatitis C	virus	Hepatitis C is a viral infection that causes liver inflammation, sometimes leading to serious liver damage.	8
Hepatitis D	virus	Hepatitis D is a liver disease in both acute and chronic forms caused by the hepatitis D virus (HDV) that requires HBV for its replication.	8
Hepatitis E	virus	Hepatitis E is an inflammation of the liver caused by infection with the hepatitis E virus.	8
Oral Herpes	virus	Oral herpes is a common infection of the mouth area that is caused by herpes simplex virus type 1 (HSV-1).	12
Syphilis	bacteria	Syphilis is a chronic bacterial infection that can be transmitted through sexual contact.	12
Cholera	bacteria	Cholera is an acute diarrheal illness caused by infection of the intestine with Vibrio cholerae bacteria.	11
COVID-19	virus	The virus that causes COVID-19 spreads easily among people.	10
EVD	virus	Ebola Virus Disease (EVD) is a rare and deadly disease in people and nonhuman primates.	10
HIV/AIDS	virus	HIV (human immunodeficiency virus) is a virus that attacks the body's immune system.	10
SARS	virus	Severe acute respiratory syndrome (SARS) is a viral respiratory disease caused by a SARS-associated coronavirus.	10
Tuberculosis	bacteria	Tuberculosis (TB) is a potentially serious infectious disease that mainly affects the lungs.	11
\.


--
-- TOC entry 3376 (class 0 OID 19096)
-- Dependencies: 214
-- Data for Name: diseasetype; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.diseasetype (id, description) FROM stdin;
2	Autoimmune Diseases
8	Hepatitis
11	Infectious diseases
12	Sexually transmitted diseases
10	Virology
\.


--
-- TOC entry 3382 (class 0 OID 19151)
-- Dependencies: 220
-- Data for Name: doctor; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.doctor (email, degree) FROM stdin;
Ariah@mail.com	Bachelor's
Bella@mail.com	Master's
Brayden@mail.com	Bachelor's
Carina@mail.com	Master's
Colby@mail.com	Master's
Darien@mail.com	Ph.D
Emaan@mail.com	Ph.D
Hayden@mail.com	Master's
Jaylen@mail.com	Master's
Joann@mail.com	Bachelor's
Kade@mail.com	Master's
Keenan@mail.com	Ph.D
\.


--
-- TOC entry 3381 (class 0 OID 19141)
-- Dependencies: 219
-- Data for Name: publicservant; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.publicservant (email, department) FROM stdin;
Joann@mail.com	dept1
Kade@mail.com	dept1
Keenan@mail.com	dept1
Keiron@mail.com	dept2
Kezia@mail.com	dept2
Matthias@mail.com	dept2
Miya@mail.com	dept2
Sahar@mail.com	dept3
Theodore@mail.com	dept3
Umaima@mail.com	dept3
Zidan@mail.com	dept3
\.


--
-- TOC entry 3384 (class 0 OID 19176)
-- Dependencies: 222
-- Data for Name: record; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.record (email, cname, disease_code, total_deaths, total_patients) FROM stdin;
Kade@mail.com	China	COVID-19	134321	543123
Kade@mail.com	India	COVID-19	123123	211233
Kade@mail.com	Italy	COVID-19	221765	432899
Kade@mail.com	United States	COVID-19	234321	543123
Miya@mail.com	China	COVID-19	10521	24789
Miya@mail.com	Italy	COVID-19	7898	9456
Miya@mail.com	India	COVID-19	9454	15458
Miya@mail.com	United States	COVID-19	5213	10123
Zidan@mail.com	Kazakhstan	HIV/AIDS	54	278
Zidan@mail.com	Democratic Republic of Congo	HIV/AIDS	257	366
Kezia@mail.com	Russia	HIV/AIDS	1	1
Kezia@mail.com	Russia	Genital Herpes	1	1
Kezia@mail.com	Russia	Oral Herpes	1	1
Kezia@mail.com	Russia	Syphilis	1	1
Theodore@mail.com	China	SARS	111222	222333
Joann@mail.com	Russia	Tuberculosis	244761	753215
Joann@mail.com	France	Tuberculosis	54778	147988
Kezia@mail.com	Tanzania	Hepatitis A	54725	97655
Keiron@mail.com	Israel	Cholera	696696	969969
Keiron@mail.com	Germany	EVD	6312	42988
\.


--
-- TOC entry 3383 (class 0 OID 19161)
-- Dependencies: 221
-- Data for Name: specialize; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.specialize (id, email) FROM stdin;
2	Ariah@mail.com
8	Bella@mail.com
10	Brayden@mail.com
12	Carina@mail.com
11	Colby@mail.com
12	Darien@mail.com
11	Emaan@mail.com
8	Hayden@mail.com
8	Jaylen@mail.com
8	Joann@mail.com
8	Kade@mail.com
12	Keenan@mail.com
11	Bella@mail.com
12	Brayden@mail.com
8	Carina@mail.com
12	Colby@mail.com
10	Darien@mail.com
10	Emaan@mail.com
11	Hayden@mail.com
10	Carina@mail.com
10	Colby@mail.com
2	Darien@mail.com
8	Emaan@mail.com
\.


--
-- TOC entry 3380 (class 0 OID 19131)
-- Dependencies: 218
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.users (email, name, surname, salary, phone, cname) FROM stdin;
Zidan@mail.com	Zidan	Reid	606	+7 747 461 9729	Kazakhstan
Bella@mail.com	Bella	Ashton	862	+7 700 982 1401	Kazakhstan
Sahar@mail.com	Sahar	Marriott	879	+7 747 826 5063	Kazakhstan
Jaylen@mail.com	Jaylen	Ryder	675	+7 747 642 7533	Kazakhstan
Umaima@mail.com	Umaima	Larsen	782	+7 747 995 1673	Kazakhstan
Joann@mail.com	Joann	Morrow	414	+7 763 183 5688	Kazakhstan
Kezia@mail.com	Kezia	Rangel	899	+7 992 626-66-32	Russia
Ariah@mail.com	Ariah	Morales	824	+7 932 270-58-13	Russia
Darien@mail.com	Darien	Yates	741	+91 61281 71346	India
Brayden@mail.com	Brayden	Wharton	800	+86 174 0428 8465	China
Hayden@mail.com	Hayden	Morse	340	+86 174 0118 8047	China
Colby@mail.com	Colby	Schultz	152	+86 174 0215 6275	China
Emaan@mail.com	Emaan	Cousins	88	+49 1596 3209567	Germany
Keiron@mail.com	Keiron	Wang	959	+49 15887 561497	Germany
Matthias@mail.com	Matthias	Salas	217	+81 70-6440-0000	Japan
Keenan@mail.com	Keenan	Cook	148	+81 90-5769-2033	Japan
Theodore@mail.com	Theodore	Kearney	279	+81 90-1409-2184	Japan
Carina@mail.com	Carina	Hodson	525	+7 708 765 3765	Kazakhstan
Kade@mail.com	Kade	Murphy	868	+86 145 0061 3389	China
Miya@mail.com	Miya	Dorsey	1234	+1 202-918-2132	United States
billyherrington@mail.com	Billy	Herrington	300	+3000000	Japan
Van	Van	Van	300	87411111	Japan
\.


--
-- TOC entry 3207 (class 2606 OID 19105)
-- Name: country country_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.country
    ADD CONSTRAINT country_pkey PRIMARY KEY (cname);


--
-- TOC entry 3212 (class 2606 OID 19120)
-- Name: discover discover_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.discover
    ADD CONSTRAINT discover_pkey PRIMARY KEY (cname, disease_code, first_enc_date);


--
-- TOC entry 3209 (class 2606 OID 19110)
-- Name: disease disease_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.disease
    ADD CONSTRAINT disease_pkey PRIMARY KEY (disease_code);


--
-- TOC entry 3205 (class 2606 OID 19100)
-- Name: diseasetype diseasetype_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.diseasetype
    ADD CONSTRAINT diseasetype_pkey PRIMARY KEY (id);


--
-- TOC entry 3218 (class 2606 OID 19155)
-- Name: doctor doctor_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.doctor
    ADD CONSTRAINT doctor_pkey PRIMARY KEY (email);


--
-- TOC entry 3216 (class 2606 OID 19145)
-- Name: publicservant publicservant_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.publicservant
    ADD CONSTRAINT publicservant_pkey PRIMARY KEY (email);


--
-- TOC entry 3222 (class 2606 OID 19180)
-- Name: record record_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.record
    ADD CONSTRAINT record_pkey PRIMARY KEY (email, cname, disease_code);


--
-- TOC entry 3220 (class 2606 OID 19165)
-- Name: specialize specialize_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.specialize
    ADD CONSTRAINT specialize_pkey PRIMARY KEY (id, email);


--
-- TOC entry 3214 (class 2606 OID 19135)
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (email);


--
-- TOC entry 3210 (class 1259 OID 19196)
-- Name: idx_pathogen; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX idx_pathogen ON public.disease USING btree (pathogen);


--
-- TOC entry 3224 (class 2606 OID 19121)
-- Name: discover discover_cname_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.discover
    ADD CONSTRAINT discover_cname_fkey FOREIGN KEY (cname) REFERENCES public.country(cname) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- TOC entry 3225 (class 2606 OID 19126)
-- Name: discover discover_disease_code_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.discover
    ADD CONSTRAINT discover_disease_code_fkey FOREIGN KEY (disease_code) REFERENCES public.disease(disease_code) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- TOC entry 3223 (class 2606 OID 19111)
-- Name: disease disease_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.disease
    ADD CONSTRAINT disease_id_fkey FOREIGN KEY (id) REFERENCES public.diseasetype(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- TOC entry 3228 (class 2606 OID 19156)
-- Name: doctor doctor_email_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.doctor
    ADD CONSTRAINT doctor_email_fkey FOREIGN KEY (email) REFERENCES public.users(email) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- TOC entry 3227 (class 2606 OID 19146)
-- Name: publicservant publicservant_email_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.publicservant
    ADD CONSTRAINT publicservant_email_fkey FOREIGN KEY (email) REFERENCES public.users(email) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- TOC entry 3231 (class 2606 OID 19186)
-- Name: record record_cname_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.record
    ADD CONSTRAINT record_cname_fkey FOREIGN KEY (cname) REFERENCES public.country(cname) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- TOC entry 3232 (class 2606 OID 19181)
-- Name: record record_disease_code_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.record
    ADD CONSTRAINT record_disease_code_fkey FOREIGN KEY (disease_code) REFERENCES public.disease(disease_code) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- TOC entry 3233 (class 2606 OID 19191)
-- Name: record record_email_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.record
    ADD CONSTRAINT record_email_fkey FOREIGN KEY (email) REFERENCES public.publicservant(email) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- TOC entry 3229 (class 2606 OID 19171)
-- Name: specialize specialize_email_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.specialize
    ADD CONSTRAINT specialize_email_fkey FOREIGN KEY (email) REFERENCES public.doctor(email) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- TOC entry 3230 (class 2606 OID 19166)
-- Name: specialize specialize_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.specialize
    ADD CONSTRAINT specialize_id_fkey FOREIGN KEY (id) REFERENCES public.diseasetype(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- TOC entry 3226 (class 2606 OID 19136)
-- Name: users users_cname_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_cname_fkey FOREIGN KEY (cname) REFERENCES public.country(cname) ON UPDATE CASCADE ON DELETE CASCADE;


-- Completed on 2022-11-22 04:24:46

--
-- PostgreSQL database dump complete
--

