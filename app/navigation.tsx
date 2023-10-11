'use client';
import { Dropdown, Navbar } from "flowbite-react";


export default function Navigation() {
  return (
    <Navbar
      className="p-5 fixed w-full z-50 shadow-3xl border-b-4 border-blue-500"
      fluid
      rounded
    >
      <Navbar.Brand href="https://flowbite-react.com">
        <span className="whitespace-nowrap text-xl dark:text-white">
          Blakes Econo Lift
        </span>
      </Navbar.Brand>
      <div className="flex">
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link className="text-xl" href="#">
          <Dropdown
            arrowIcon={true}
            inline
            label={"Lifts"}
          >
            <div className="p-5 rounded-lg">
              <p className="pb-5 text-xl">
                Wave Armor
              </p>
              <Dropdown.Divider />
              <p className="text-xl">
                Econo Lift
              </p>
            </div>
          </Dropdown>
        </Navbar.Link>
        <Navbar.Link className="text-xl" href="#">
          Services
        </Navbar.Link>
        <Navbar.Link className="text-xl" href="#">
          Contact Us
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  )
}
