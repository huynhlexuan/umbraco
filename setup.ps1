# Ensure we have the version specific Umbraco templates
dotnet new install Umbraco.Templates::13.8.0 --force

# Create solution/project
dotnet new sln --name "MySolution"
dotnet new umbraco --force -n "MyProject"  --friendly-name "Administrator" --email "toifixbugdao@gmail.com" --password "1Ax@240192" --development-database-type SQLite
dotnet sln add "MyProject"


dotnet run --project "MyProject"
#Running