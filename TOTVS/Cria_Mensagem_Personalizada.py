# %%
# Utilize sua própria URL se quiser ;)
# Repositório da API: https://github.com/digitalinnovationone/santander-dev-week-2023-api
from sqlalchemy import create_engine
import pandas as pd
from openai import OpenAI
api_key = "SUA_CHAVE"
conn = "postgresql://postgres:FBhTTReLdbMiWCFJSMyxFNzwXlpWPGPe@roundhouse.proxy.rlwy.net:26387/railway"
engine = create_engine(conn)
client = OpenAI(api_key=api_key )
#%%
url = "https://api.openai.com/v1/chat/completions"
headers = {
    "Authorization": f"Bearer {api_key}",
    "Content-Type": "application/json"
}


def get_user(id):

    query = f'''
    SELECT *
    FROM "bd_desafio_DIO"
    WHERE id = {id}
    '''

    df_user = pd.read_sql(query, engine)

    if not df_user.empty:
        return df_user.iloc[0].to_dict()
    
    return None

def generate_ai_news(user):

    completion = client.chat.completions.create(
        model="gpt-4o-mini",
        messages=[
            {
                "role": "system",
                "content": "Você é especialista em marketing bancário."
            },
            {
                "role": "user",
                "content": f"Crie uma mensagem curta para {user['usuario']} sobre investimentos. Máximo 20 palavras."
            }
        ]
    )

    return completion.choices[0].message.content


#descobrir informações da tabela
df = pd.read_sql("""
SELECT table_name
FROM information_schema.tables
WHERE table_schema = 'public'
""", engine)

# %%
df = pd.read_sql('SELECT * FROM "bd_desafio_DIO"', engine)
print(df)
# %%

# print(json.dumps(users, indent=2))
# %%
user_ids = df['id'].tolist()
users = [user for id in user_ids if (user := get_user(id)) is not None]

for user in users:
    news = generate_ai_news(user)
    print(news)
# %%
