import blackboxprotobuf
import base64
mydata = "AAAAABkIASIG"
out_b = base64.b64decode(mydata)

print(out_b)

deserialize_data, message_type = blackboxprotobuf.protobuf_to_json(out_b)
print(f"原始数据: {deserialize_data}")
print(f"消息类型: {message_type}")
