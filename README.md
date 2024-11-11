gcloud builds submit --tag gcr.io/[YOUR_PROJECT_ID]/teamcoreapp
gcloud run deploy teamcoreapp --image gcr.io/[YOUR_PROJECT_ID]/teamcoreapp --platform managed
