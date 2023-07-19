import base64
import io


def save_base64_as_file(base64_string, output_file_path):
    # 解码 Base64 字符串为字节数据
    decoded_data = base64.b64decode(base64_string)

    # 将字节数据写入二进制文件
    with open(output_file_path, 'wb') as output_file:
        output_file.write(decoded_data)


# 示例用法
base64_string = ''  # Base64 编码的字符串
output_file_path = 'output.bin'  # 输出文件路径

save_base64_as_file(base64_string, output_file_path)
