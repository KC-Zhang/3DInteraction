from flask import Flask, render_template, url_for
app = Flask(__name__)

@app.route('/')
def hello_flask(name=None):
    return render_template("hello.html", name=name)

if __name__ == '__main__':
    app.run()
