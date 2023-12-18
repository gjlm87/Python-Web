import reflex as rx

class State(rx.State):
    pass

def index() -> rx.component:
 return rx.hstack(
    rx.text (
      "geralddev",
       height="40px",
       
   ),
   position="sticky",
   bg="black",
   padding_x="16px",
   padding_y="8px"
   
 ) 


app = rx.App()
app.add_page(index)
app.compile()