import pandas as pd

# Step 1: Load the CSV file
df = pd.read_csv('diabetes.csv')

# Step 2: Check the first few rows of the data
print("First 5 rows of the dataset:")
print(df.head())

# Step 3: Check for missing values
print("\nMissing values in each column:")
print(df.isnull().sum())

# Step 4: Handle missing data
# Option 1: Drop rows with missing values (if the dataset allows)
# df_cleaned = df.dropna()

# Option 2: Fill missing values with a default value (e.g., 0 or a mean value)
df_cleaned = df.fillna(0)

# Step 5: Standardize column names (optional but good practice)
df_cleaned.columns = df_cleaned.columns.str.strip().str.lower().str.replace(' ', '_')

# Step 6: Remove duplicates
df_cleaned = df_cleaned.drop_duplicates()

# Step 7: Save the cleaned data to a new CSV file
df_cleaned.to_csv('diabetes_cleaned.csv', index=False)

print("\nData preprocessing complete! Cleaned data saved to 'diabetes_cleaned.csv'")
