import React from "react";
import Section from "./Section";
import { Badge } from "./ui/badge";
import { ContactCard } from "./ContactCard";

export default function Contact() {
  return (
    <Section className="flex flex-col items-start gap-4">
      <Badge className="mb-4" variant={"outline"}>
        Contacte me
      </Badge>
      <h2 className=" border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        I will be happy ti work with you.
      </h2>
      <div className="flex gap-4 max-md:flex-col w-full">
        <ContactCard
        className="flex-1"
          name="SmithsYvan"
          image="/profile-rounded.png"
          mediumImage="data:image/png;base64,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"
          descriptiom="Like me"
          url="mailto:yvanfotso935@gmail.com"
        />
        <ContactCard
        className="flex-1"
          name="@Smiths935"
          image="/profile-rounded.png"
          mediumImage="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAkFBMVEUKZsL///8AXsCmvOIAZMGrxOYpdMcAY8LL3vG/1e4Zb8UAYMBLic/q8vr3+/16o9miwebh6/Zij9AAWr6oyOkAWL5Lg8yXveTc5POxyugTbMVSh813p9xomNQEacNDfsqCrd4xesrE2e/U5PRXldRwn9gYdMiKs+DP3PDn7/nX6PY+hs9bi89Be8mswOOfv+TU3GciAAAGgElEQVR4nO3da0OqMBgHcFiTARMKCRUTE808aeX3/3YHTPMS8jxYp22c5/+uFyC/xmXshmW3PdbxH+HKSzumJ/VW4QXhfe8hH1nC8HDLf3voeRXCyI+l4JxbpqcwCJnk0Zkw3IyE6kP70Qi/cyoct6DwTiMm42PhOGkbsDhbk+lBmE7aByyIk3QvDJx2XYP7iDzYCbtS9bH8o7DsQxjFqo/knyUJtsJxW4vQsuR0K3xt51VYRvSDQhg+tFdo+bNCGPTbK+RW2nKhxW4K4Txv4+N+l63Q80locEhofkhofkhofkhofkhofkhYHZOa/hsLuWTM958nMZNmKJsJuWBykQ6jIsPBE49NQDYSCqs7OO6X8zJHf2MDIZe5d9LxWMTNhO5EvJCzcWR/SdixNG/jQQuFn371lQlyvYlYoci9aqBtRz2tiUghH10EFkStSxEpZBdO0d3FqHPnI07IFnVA2041ruOghMKpuIueFGKmb+cVRsh5px5YPBcdbQsRIxSPASS0F9oWIkYopyDQdpPfOuKmwQhj4Crc5lnX0xQhFGsE0B6wXzvmZkEI5RIjHOp6miKEDLyTlol0PU0RwvgPSqhrWw9GOMQIXx41rZz+mNDkMqyvdX8KDb4OkfdSXSs1mOdhFyNMDX4ecokRalsxxdTakjlC+FsH3Diomjfw/lvG03b8Jur98A2ueuv7Cox6x5cbCDjT9WmIFPIRcCWGPW2LENkSJYEHxkBfILY1Mb6rA660PUUtfIswryGutJ7KgG3V55OLxLne42/RPTMXS1HvEmzWu5atvvqCpdQb2KgPWPqds4bTMO0yne8yZRr1cnP+OD2u3gy6unePWs1HKki2HsyGRdJxnjDtu7ita8bTCBaXYbpff/vQmCjzQ0LzQ0LzQ0LzQ0I14eXaHeUiJD8wGFk7YVn15RPHyfv9N8dxJhNZ1A+/c3h6CbmMR+vFeyd13XkQRK7rpun7zaI7Yde/pOGEHF70pvlW59sUPP6URsH5KF07DKLZ8vnaNxlce6n/2qvNa9WQKP5Wv9Hj6TYyX9QPD7x/vWrMNW5cW/fL//UstxUNpuy9fpuT/jjOehVtJGdxb56bn61IITDsK6wU3tRvdH8QcjbawCPLikRL2bQctRAKf4zhffxUNmn26q2DkHVnaGCRNG/Uh6BeKJMMdYIeEuVNVnxSLeRygelhPks6whMVC7lAjOysyBI/LkKxUE6h59CF4K9FtUJ2eyXQDtbYO6pSoXy80lfEw16KKoXxyL1eaI+Rl6JSIWrA3MUgX4gUCu/A2m59kOPMFApnjWoyFT+KG8OjUPjteKjpViYLwy7miWGyEDcDwmihjXkfNlv4hLjXmC30ENNYzBZipkCYLaz83VYJ7bvWC2d+24WIVTs1Es7TwXg6nS7vmzTcwKsdaCIM58tRwpgswljC1h62+W0JXoh6CL1beVw94UKuawclHwK/QmkhzEZfmuqFWKCKcQ4+8zUQzvOq6iVnfbirpogBQte5cCnJPqYNAF7SQ7nwEtCyYsy0QLBVUbmw5vVg92WD+oBz5lQLa786ITP4PAUfF4qFQW1DBJfwFOQN9LhQLLyvvxXKJ3APf6BpgYqFwH0CMX0VXMtBrTCEDi8G21SHep+lYDcgvHAMOEterRB8MxA9UAiucaVSGIDNLOX3N0wWImYFOlAHXAStUKVU2IEnBfo1K+FtU/9EVS28AV/u4Iqb1kJMW6CEdqK3ENEBCO5EayF4cBY8wFFzIWLEiITGo2gtxCzaY7gQMZqChCQkIQlJSEISkpCEJCQhCUlIQhKSkIQkJCEJSUhCEpKQhCQkIQlJSEISkpCEJCQhCUlIQhKSkIQkJCEJSUjC/1N41WrX9gtqNgKwk58R8nxwV5tN1c+IrH6juyVigU7R3dTvZJD/xOw8i0tWn8r/owA2Qq3M/e2d4IQmh4Tmh4Tmh4Tmh4Tmh4Tmh4Tmh4Tm5z8RutAqNiZnK0SsVWtuWi/kPC2E4UOLhY5bCO3X9gpFPyyF40ZfMjMq5Zp2hTC4/iOYmoezYCu0F/ivfJkVVraZl8KV084rUTjRTli/Fqyx4aPtgnZbob1BfAzDuMQf655/CO1p3LZSFPvFpHdCO7287rSJ4TLfr0i4F9pur7oPycgI2fv8xsKn0A7TPCm/gm16hGTJ2jt0Hh+ERaJBtv3it8l562eDl2PUibDsNy6/+G1yovM++XNh+/IXC1XY2O8rZJcAAAAASUVORK5CYII="
          descriptiom="Linkedin"
          url="www.linkedin.com/in/yvan-fotso-a64470282"
        />
        <ContactCard
        className="flex-1"
          name="yvanfotso935@gmail.com"
          image="/profile-rounded.png"
          mediumImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjn0-Jlvv5mutNz9knUoo3nJFD0Am-M6sl5Q&s"
          descriptiom="Email me for any inquiries"
          url="mailto:yvanfotso935@gmail.com"
        />
      </div>
    </Section>
  );
}
