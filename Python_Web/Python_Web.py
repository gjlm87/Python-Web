import reflex as rx
from Python_Web.components.navbar import navbar
from Python_Web.views.header.header import header




class State(rx.State):
    pass

def index() -> rx.Component:
 return rx.vstack(
    navbar(),   
    header()
 ) 



app = rx.App()
app.add_page(index)
app.compile()