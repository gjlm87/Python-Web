import reflex as rx
import datetime


def footer() -> rx.Component:
    return rx.vstack(
        rx.image(src="favicon.ico"),
        rx.link(
            f"© {datetime.date.today().year} Geralddev.",
            href="https://www.facebook.com/?locale=es_LA",
            is_external=True,
        ),
        rx.text("Todos los derechos reservados"),
    )
