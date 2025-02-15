'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Burger, Container, Group } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import logo from '../../assets/logo_Multisala_Rivoli.png';
import classes from './header.module.css';

const links = [
  { link: '/', label: 'Homepage' },
  { link: '/tariffe-promozioni', label: 'Tariffe e promozioni' },
  { link: '/acquista', label: 'Acquista' },
  { link: '/iniziative', label: 'Iniziative' },
  { link: '/app', label: 'App' },
  { link: '/contatti', label: 'Contatti' },
];

export function Header() {
  const [opened, { toggle }] = useDisclosure(false);
  const [active, setActive] = useState(links[0].link);

  const items = links.map((link) => (
    <Link
      key={link.label}
      href={link.link}
      className={classes.link}
      data-active={active === link.link || undefined}
      onClick={(event) => {
        event.preventDefault();
        setActive(link.link);
      }}
    >
      {link.label}
    </Link>
  ));

  return (
    <header className={classes.header}>
      <Container size="md" className={classes.inner}>
        <Image src={logo} alt="Cinema Multisala Rivoli" height={60} />
        <Group gap={5} visibleFrom="xs">
          {items}
        </Group>

        <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />
      </Container>
    </header>
  );
}
