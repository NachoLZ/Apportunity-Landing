import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
} from "@nextui-org/react";
import { AcmeLogo } from "./AcmeLogo.jsx";
import {
  ChevronDown,
  Lock,
  Activity,
  Flash,
  Server,
  TagUser,
  Scale,
} from "./Icons.jsx";
import { redirect } from "react-router";
export default function Navibar() {
  const icons = {
    chevron: <ChevronDown fill="currentColor" size={16} />,
    scale: <Scale className="text-warning" fill="currentColor" size={30} />,
    lock: <Lock className="text-success" fill="currentColor" size={30} />,
    activity: (
      <Activity className="text-secondary" fill="currentColor" size={30} />
    ),
    flash: <Flash className="text-primary" fill="currentColor" size={30} />,
    server: <Server className="text-success" fill="currentColor" size={30} />,
    user: <TagUser className="text-danger" fill="currentColor" size={30} />,
  };
  return (
    <Navbar isBordered style={{ backgroundColor: "#45D483" }}>
      <NavbarBrand>
        <a href="/">
          <AcmeLogo />
        </a>
      </NavbarBrand>
      <NavbarContent justify="center">
        <Dropdown>
          <NavbarItem>
            <DropdownTrigger>
              <Button
                disableRipple
                className="p-0 bg-transparent data-[hover=true]:bg-transparent"
                endContent={icons.chevron}
                radius="sm"
                variant="light"
              >
                Hardware
              </Button>
            </DropdownTrigger>
          </NavbarItem>
          <DropdownMenu
            aria-label="ACME features"
            className="w-[340px]"
            itemClasses={{
              base: "gap-4",
            }}
          >
            <DropdownItem
              key="Dispositivos Inteligentes"
              description="Dispositivos inteligentes de monitoreo a distancia"
              startContent={icons.scale}
            >
              <a href="/hardware/dispositivos">Dispositivos inteligentes</a>
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <Dropdown>
          <NavbarItem>
            <DropdownTrigger>
              <Button
                disableRipple
                className="p-0 bg-transparent data-[hover=true]:bg-transparent"
                endContent={icons.chevron}
                radius="sm"
                variant="light"
              >
                Software
              </Button>
            </DropdownTrigger>
          </NavbarItem>
          <DropdownMenu
            aria-label="ACME features"
            className="w-[340px]"
            itemClasses={{
              base: "gap-4",
            }}
          >
            <DropdownItem
              key="MIP"
              description="Centro de analisis de datos y tendencias de plagas"
              startContent={icons.user}
            >
              <a href="/software/central-mip">Central MIP</a>
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <Dropdown>
          <NavbarItem>
            <DropdownTrigger>
              <Button
                disableRipple
                className="p-0 bg-transparent data-[hover=true]:bg-transparent"
                endContent={icons.chevron}
                radius="sm"
                variant="light"
              >
                Soluciones
              </Button>
            </DropdownTrigger>
          </NavbarItem>
          <DropdownMenu
            aria-label="ACME features"
            className="w-[340px]"
            itemClasses={{
              base: "gap-4",
            }}
          >
            <DropdownItem
              key="Apportunity"
              description="Aplicación dedicada a la prevencion de plagas"
              startContent={icons.server}
            >
              <a href="/soluciones/apportunity">Apportunity</a>
            </DropdownItem>
            <DropdownItem
              key="diseño"
              description="Diseño de trampas y material educativo"
              startContent={icons.server}
            >
              <a href="/soluciones/educacion">
                {" "}
                Diseño de trampas y material educativo
              </a>
            </DropdownItem>

            <DropdownItem
              key="servicios"
              description="Servicios de sellado estructural, limpieza focalizada y capacitación"
              startContent={icons.user}
            >
              <a href="/soluciones/servicios">Servicios</a>
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <NavbarItem>
          <Link href="/contacto">
            <Button
              disableRipple
              className="p-0 bg-transparent data-[hover=true]:bg-transparent"
              radius="sm"
              variant="light"
            >
              Contacto
            </Button>
          </Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
