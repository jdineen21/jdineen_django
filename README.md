# jdineen_django 

https://www.jdineen.co.uk/

## Development Server Setup

#### 1. Clone repo and cd into it
```
git clone --recursive https://github.com/jdineen21/jdineen_django 
cd jdineen_django 
```

#### 2. Upgrade pip and install virtualenv
```
python -m pip install --upgrade pip
pip install virtualenv
```

#### 3. Setup Development Environment
Linux
```
python -m venv .venv
source .venv/bin/activate
pip install --upgrade pip
pip install -r requirements.txt
```
Windows
```
python -m venv .venv
.venv/Scripts/activate
pip install --upgrade pip
pip install -r requirements.txt
```

#### 4. Install node modules and compile js
```
npm install
npm run dev
```

#### 5. Create .env file from .env.example and insert secret key
```
cp .env.example .env
python -c 'from django.core.management.utils import get_random_secret_key; print(get_random_secret_key())' >> .env
```

#### ./6. Launch django dev server
```
./manage.py migrate
./manage.py runserver
```

## Deployment

#### 1. Perform System Check
```
python manage.py check --deploy --settings=jdineen_django.settings.production
```

## Tips
Show outdated pip packages
```
pip list --outdated
```
Update pip package
```
pip install --upgrade Django
```
NPM commands
```
npm audit
```