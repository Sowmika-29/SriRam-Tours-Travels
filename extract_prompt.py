import json

with open(r"C:\Users\Sowmika H\.gemini\antigravity\brain\f5b3f351-ad67-4cfb-a554-c308e520ec03\.system_generated\logs\overview.txt", "r", encoding="utf-8") as f:
    for line in f:
        if not line.strip():
            continue
        try:
            obj = json.loads(line)
            if obj.get("step_index") == 0:
                content = obj.get("content", "")
                with open("prompt_content.txt", "w", encoding="utf-8") as out:
                    out.write(content)
                print("Successfully wrote prompt_content.txt")
                break
        except Exception as e:
            print("Error:", e)
